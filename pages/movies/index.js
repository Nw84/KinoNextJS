import { getAllMoviePosters } from "../../helpers/posterHelper";
import classes from "../../styles/movies.module.css";
import MovieList from "../../components/movies/MovieList";

function movies(props) {

    return (
        <div className={classes.movies}>
            <div className={classes.movieCategories}>
                <h1>Aktuella filmer</h1>
                <div className={classes.movieList}>
                    <MovieList posters={props.posters} />
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
                id: poster._id.toString(),
            })),
        },
        revalidate: 1,
    };
}

export default movies;
