import { getAllMoviePosters } from "../../helpers/posterHelper";
import MovieList from "../../components/movies/MovieList";

function movies(props) {
    return <MovieList posters={props.posters} />
}

export async function getStaticProps() {
    const posters = await getAllMoviePosters();
    return {
        props: {
            posters: posters.map((poster) => ({
                title: poster.title,
                id: poster._id.toString()
            })),
        },
        revalidate: 1
    };
}


export default movies;