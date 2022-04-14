import { connectToDatabase } from '../../../util/mongodb.js';
import { hashPassword } from '../../../lib/auth';

async function handler(req, res) {
  if (req.method === 'POST') {
    
    const data = req.body;

    const { email, password } = data;

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message:
          'Invalid input - check that password is at least 7 characters long',
      });
    }

    const { db, client } = await connectToDatabase();

    const existingUser = await db.collection('users').findOne({email: email})

    if (existingUser) {
      res.status(422).json({ message: 'User already exists'});
      /* Originally wanted to close server connection here with client.close() 
      but if we do and if the user already exists and the visitor tries to 
      sign up with a unique email without refreshing the client, the visitor will receive a 500 error */
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection('users').insertOne({
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({ message: 'Created user!' });
  }
}

export default handler;
