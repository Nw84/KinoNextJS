import { MongoClient } from "mongodb";

import MovieList from "../../components/movies/MovieList";

function movies(props) {
    return <MovieList posters={props.posters} />
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
                id: poster._id.toString()
            })),
        },
        revalidate: 1
    };
}


export default movies;