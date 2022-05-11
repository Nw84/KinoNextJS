import { getAllMoviePosters } from "../helpers/posterHelper";
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
  const posters = await getAllMoviePosters();

  return {
    props: {
      posters: posters.map((poster) => ({
        title: poster.title,
        poster: poster.poster,
        id: poster._id.toString()
      })),
    },
    revalidate: 1
  };
}

export default HomePage; 