import Head from "next/head";
// import clientPromise from "../lib/mongodb";
import { BookmarksContextProvider } from "../store/BookmarksContext";
import MainCategoryIndex from "../components/ui/category-card";

export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Help Local</title>
        <link rel="icon" href="/ukraine-flag.png" />
      </Head>

      <main>
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
