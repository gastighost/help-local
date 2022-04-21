// import { render, screen } from '@testing-library/react'
// import Home from '../pages/index'
// import '@testing-library/jest-dom'
// const {MongoClient} = require('mongodb');

// describe('Home', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(global.__MONGO_URI__, {
//       useNewUrlParser: true,
//     });
//     db = await connection.db(global.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//     if(db.close) {
//       await db.close();
//     }
//   });

//   it('renders a heading', () => {
//     render(<Home />)

//     const heading = screen.getByRole('heading', {
//       name: /welcome to next\.js!/i,
//     })

//     expect(heading).toBeInTheDocument()
//   })
// });
