import { MongoClient, ObjectId } from "mongodb";
import MovieDetails from "../../../components/movies/MovieDetails";
import ReviewList from "../../../components/reviews/reviewList";
import { getReviews } from "../../../helpers/getReviews";

function movieDetails(props) {
    return (
        <>
            <MovieDetails
                image={props.movieData.image}
                title={props.movieData.title}
                description={props.movieData.description} />

            <ReviewList
                reviews={props.reviews} />
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

    const reviews = await getReviews(movieID);

    client.close();

    return {
        props: {
            movieData: {
                id: selectedMovie._id.toString(),
                title: selectedMovie.title,
                image: selectedMovie.image,
                description: selectedMovie.description,
            },
            reviews: reviews.map((review) => ({
                id: review._id.toString(),
                name: review.name,
                rating: review.rating,
                comment: review.comment,
            }))       
        }
    }
}

export default movieDetails; 
