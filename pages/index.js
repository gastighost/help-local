import Head from "next/head";
// import clientPromise from "../lib/mongodb";
import classes from "../styles/Home.module.scss"
import MainCategoryIndex from "../components/ui/category-card";
import GreetingCard from "../components/ui/greeting-card";
import CategoryContainer from "../components/ui/category-container";

export default function Home({ isConnected }) {
  return (
    <div className={classes.container}>
      <Head>
        <title>Help Local</title>
        <link rel="icon" href="/ukraine-flag.png" />
      </Head>

      <main>
        <div id="backdrop-root"></div>
        <div id="overlay-root"></div>
        <div >
        <GreetingCard />
        </div>
        <CategoryContainer>
          <MainCategoryIndex
            name="Jobs"
            caption="Find job offers around you, suitable for beginners"
            categoryUrl="/jobs"
            imageUrl="/job-icon.svg"
          />
          <MainCategoryIndex
            name="Education"
            caption="Develop skills, learn languages, book a class"
            categoryUrl="/education"
            imageUrl="/education-icon.svg"
          />
          <MainCategoryIndex
            name="Supplies"
            caption="Find free resources and supplies close to you"
            categoryUrl="/humanitarian-aid"
            imageUrl="/supplies-icon.svg"
          />
          <MainCategoryIndex
            name="Groups"
            caption="Connect with other people, get help and feedback"
            categoryUrl="/social-media"
            imageUrl="/groups-icon.svg"
          />
        </CategoryContainer>
      </main>
    </div>
  );
}
