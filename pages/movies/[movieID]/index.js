import { MongoClient, ObjectId } from "mongodb";
import MovieDetails from "../../../components/movies/MovieDetails";
import ReviewList from "../../../components/reviews/reviewList";

const DUMMY_REVIEWS = [
    {
        id: "1",
        movieId: "62601d5146c59a981d84c680",
        name: "Bosse",
        rating: 4.5,
        comment: "Väldigt rolig film"
    },
    {
        id: "2",
        movieId: "62601d5146c59a981d84c680",
        name: "Emma",
        rating: 2,
        comment: "Somnade halvvägs in"
    },
    {
        id: "3",
        movieId: "62601d5146c59a981d84c680",
        name: "AnnaKarinOlsson",
        rating: 3,
        comment: "Detta var den bästa film jag sett."
    }
];

function movieDetails(props) {
    return (
        <>
            <MovieDetails
                image={props.movieData.image}
                title={props.movieData.title}
                description={props.movieData.description} />

            <ReviewList  
                reviews={DUMMY_REVIEWS} />
        </>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://Bosse:LKjRPJ2chOlxeM0E@cluster0.rpxxl.mongodb.net/moviePosters?retryWrites=true&w=majority");
    const db = client.db();
    const postersCollection = db.collection("moviePosters");
    const posters = await postersCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: posters.map(poster => ({
            params: { movieID: poster._id.toString() }
        })),
    };
}

//Fetch data for a single movie
export async function getStaticProps(context) {
    const movieID = context.params.movieID;
    const client = await MongoClient.connect("mongodb+srv://Bosse:LKjRPJ2chOlxeM0E@cluster0.rpxxl.mongodb.net/moviePosters?retryWrites=true&w=majority");
    const db = client.db();
    const postersCollection = db.collection("moviePosters");
    const selectedMovie = await postersCollection.findOne({ _id: ObjectId(movieID) })

    client.close();

    return {
        props: {
            movieData: {
                id: selectedMovie._id.toString(),
                title: selectedMovie.title,
                image: selectedMovie.image,
                description: selectedMovie.description,
            },
        }
    }
}



export default movieDetails; 