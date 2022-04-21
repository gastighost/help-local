import Head from "next/head";
// import clientPromise from "../lib/mongodb";
import { BookmarksContextProvider } from "../store/BookmarksContext";
import MainCategoryIndex from "../components/layout/main-category-index";

export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Help Local</title>
        <link rel="icon" href="/ukraine-flag.png" />
      </Head>

      <main>
        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}

        <MainCategoryIndex name="Jobs" categoryUrl="/jobs" />
        <MainCategoryIndex name="Education" categoryUrl="/education" />
        <MainCategoryIndex
          name="Humanitarian Aid"
          categoryUrl="/humanitarian-aid"
        />
        <MainCategoryIndex name="Social Media" categoryUrl="/social-media" />
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   try {
//     await clientPromise;
//     // `await clientPromise` will use the default database passed in the MONGODB_URI
//     // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the folloing code:
//     //
//     // `const client = await clientPromise`
//     // `const db = client.db("myDatabase")`
//     //
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands

//     return {
//       props: { isConnected: true },
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { isConnected: false },
//     };
//   }
// }
