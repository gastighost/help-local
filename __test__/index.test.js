import { render } from '@testing-library/react'
import Home from '../pages/index'

const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    console.log("Test Starting...");
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
    // await db.collection('COLLECTION_NAME').deleteMany({});
  });

  afterAll(async () => {
    console.log("Test Ending...");
    await connection.close();
//   if(db.close) {
//     await db.close();
//   }
    console.log("Test ended!");
  });

  it('renders homepage unchanged', async () => {
    const { container } = render(<Home />)
    await expect(container).toMatchSnapshot()
    console.log("rendering ended");
  });
  console.log("does it get to here?");
});
