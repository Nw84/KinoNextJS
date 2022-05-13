import { getAllMoviePosters } from "../helpers/posterHelper";
import { getAllScreenings } from "../helpers/screeningHelper"
import PosterList from "../components/movies/PosterList";
import MainHero from "../components/layout/MainHero";
import classes from "../styles/home.module.css";
import BasicScreeningsList from "../components/screenings/BasicScreeningsList";

function HomePage(props) {
  return (
    <div className={classes.container}>
      <div className={classes.mainHero}>
        <MainHero />
      </div>
      <div className={classes.cards}>
        <div className={classes.cardCategories}>
          <h1 className={classes.cardList}> Aktuella Filmer </h1>
          <PosterList posters={props.posters} />
        </div>
        <div className={classes.screenings}>
          <h1>Kommande Visningar</h1>
          <BasicScreeningsList screenings={props.screenings} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posters = await getAllMoviePosters(3);
  const screenings = await getAllScreenings(5);

  return {
    props: {
      posters: posters.map((poster) => ({
        title: poster.title,
        poster: poster.poster,
        id: poster._id.toString()
      })),
      screenings: screenings.map((screening) => ({
        title: screening.title,
        id: screening._id.toString(),
        date: screening.date,
        time: screening.time
      })),
    },
    revalidate: 1
  };
}

export default HomePage; 