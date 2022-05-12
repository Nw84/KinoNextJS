import MovieLink from "./MovieLink";
import classes from "./MovieList.module.css";

function MovieList(props) {
    return (
        <ul className={classes.list}>
            {props.posters.map((poster) => (
                <MovieLink
                    key={poster.id}
                    id={poster.id}
                    title={poster.title}
                    poster={poster.poster}
                />
            ))}
        </ul>
    );
}

export default MovieList;
