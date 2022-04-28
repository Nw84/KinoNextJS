import { MongoClient } from "mongodb";

import PosterList from "../components/movies/PosterList";
import MainHero from "../components/layout/MainHero";
import classes from "../styles/Home.module.css";

function HomePage(props) {
  return (
    <div className={classes.container}>
      <div className={classes.mainHero}>
        <MainHero />
      </div>
      <div className={classes.cards}>
        <div className={classes.cardCategories}>
          <h1 className={classes.cardList}> Upcoming movies: </h1>
          <PosterList posters={props.posters} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {

  const client = await MongoClient.connect("mongodb+srv://Bosse:LKjRPJ2chOlxeM0E@cluster0.rpxxl.mongodb.net/moviePosters?retryWrites=true&w=majority");

  const db = client.db();

  const postersCollection = db.collection("moviePosters");

  const posters = await postersCollection.find().toArray();

  client.close();

  return {
    props: {
      posters: posters.map((poster) => ({
        title: poster.title,
        image: poster.image,
        id: poster._id.toString()
      })),
    },
    revalidate: 1
  };
}

export default HomePage; 