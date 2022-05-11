import { MongoClient, ObjectId } from "mongodb";
import MovieDetails from "../../../components/movies/MovieDetails";
import ReviewList from "../../../components/reviews/reviewList";
import { getReviews } from "../../../helpers/getReviews";
import ReviewForm from "../../../components/reviews/ReviewForm";
import { useState } from "react";
import { useRouter } from "next/router";
import classes from "../../../styles/movieId.module.css";

function movieDetails(props) {
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState("");
    const [name, setName] = useState("");
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(5);

    function nextHandler() {
        setLow(low + 5)
        setHigh(high + 5)
    }

    function previousHandler() {
        setLow(low - 5)
        setHigh(high - 5)
    }



    const router = useRouter();

    async function handleReview() {
        await fetch("/api/review", {
            method: "POST",
            body: JSON.stringify({
                name,
                rating,
                comment: review,
                movieId: props.movieId,
                date: new Date()
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        setName("");
        setReview("");
        setRating(1);
        router.push("/movies/" + props.movieId);
    }

    return (
        <>
            <MovieDetails
                image={props.movieData.image}
                title={props.movieData.title}
                description={props.movieData.description} />

            <ReviewForm
                handleReview={handleReview}
                setRating={setRating}
                rating={rating}
                setName={setName}
                name={name}
                setReview={setReview}
                review={review} />

            <ReviewList
                reviews={props.reviews.slice(low, high)} />
            <div className={classes.btnContainer}>
                <h4>Recensioner {low}-{high}</h4>
                <button
                    className={classes.btn}
                    disabled={low === 0}
                    onClick={previousHandler}>
                    Föregående
                </button>
                <button
                    className={classes.btn}
                    disabled={high + 1 > props.reviews.length}
                    onClick={nextHandler}>
                    Nästa
                </button>
            </div>
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
            })),
            movieId: movieID,
        }
    }
}

export default movieDetails; 
