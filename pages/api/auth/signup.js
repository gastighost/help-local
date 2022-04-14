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

    const { db } = await connectToDatabase();

    const hashedPassword = await hashPassword(password);

    const result = await db.collection('users').insertOne({
      email: email,
      password: hashedPassword,
    });

    res.status(200).json({ message: 'Created user!' });
  }
}

export default handler;
