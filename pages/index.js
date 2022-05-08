import Head from "next/head";
// import clientPromise from "../lib/mongodb";
import MainCategoryIndex from "../components/ui/category-card";
import GreetingCard from "../components/ui/greeting-card";
import CategoryContainer from "../components/ui/category-container";

export default function Home({ isConnected }) {
  return (
    <div className="container">
      <Head>
        <title>Help Local</title>
        <link rel="icon" href="/ukraine-flag.png" />
      </Head>

      <main>
        <div id="backdrop-root"></div>
        <div id="overlay-root"></div>
        <GreetingCard />
        <CategoryContainer>
          <MainCategoryIndex
            name="Jobs"
            caption="Find job offers around you, suitable for beginners"
            categoryUrl="/jobs"
            imageUrl="/job-icon.png"
          />
          <MainCategoryIndex
            name="Education"
            caption="Develop skills, learn languages, book a class"
            categoryUrl="/education"
            imageUrl="/education-icon.png"
          />
          <MainCategoryIndex
            name="Supplies"
            caption="Find free resources and supplies close to you"
            categoryUrl="/humanitarian-aid"
            imageUrl="/supplies-icon.png"
          />
          <MainCategoryIndex
            name="Groups"
            caption="Connect with other people, get help and feedback"
            categoryUrl="/social-media"
            imageUrl="/social-media.png"
          />
        </CategoryContainer>
      </main>
    </div>
  );
}
