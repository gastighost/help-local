const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
    // await db.collection('COLLECTION_NAME').deleteMany({});
  });

  afterAll(async () => {
    await connection.close();
//   if(db.close) {
//     await db.close();
//   }
  });

  it('should insert a user into users collection', async () => {
    const users = db.collection('users');

    const mockUser = {
      _id: 'some-user-id',
      email: 'john@doe.com',
      password: '123456'
    };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({_id: 'some-user-id'});
    expect(insertedUser).toEqual(mockUser);
  });

  it('should insert a new job into jobs collection', async () => {
    const jobs = db.collection('jobs');

    const mockJob = {
      _id: 'some-job-id',
      category: 'Full-time',
      title: 'Software Engineer',
      location: 'Berlin',
      monthlySalary: 2000,
      weeklyHours: 40,
      requirements: 'ReactJS, Next.js, node.js, ruby on rails',
      language: 'English',
      description: 'Building full-stack web applications for retail store clients',
      company: 'Some IT Startup',
    };
    await jobs.insertOne(mockJob);

    const insertedJob = await jobs.findOne({_id: 'some-job-id'});
    expect(insertedJob).toEqual(mockJob);
  })

  it('should insert a new Education into its DB collection', async () => {
    const educations = db.collection('education');

    const mockEducation = {
      _id: 'some-job-id',
      category: 'school',
      title: 'Software Engineer',
      location: 'Berlin',
      studentAge: 25,
      contact: 'email@email.com',
      language: 'English',
      tutor: 'John Doe',
    };
    await educations.insertOne(mockEducation);

    const insertedEducation = await educations.findOne({_id: 'some-job-id'});
    expect(insertedEducation).toEqual(mockEducation);
  })

});
