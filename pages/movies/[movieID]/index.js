import MovieDetails from "../../../components/movies/MovieDetails";
import ReviewList from "../../../components/reviews/reviewList";
import { getReviews } from "../../../helpers/reviewHelper";
import ReviewForm from "../../../components/reviews/ReviewForm";
import { useState } from "react";
import { useRouter } from "next/router";
import classes from "../../../styles/movieId.module.css";
import { pathHelper, getOnePoster } from "../../../helpers/posterHelper";
import Link from "next/link";
import React, { useContext } from "react";
import { Context } from "../../_app";


function SpecifcMovie(props) {
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState("");
    const [name, setName] = useState("");
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(5);
    const [context, setContext] = useContext(Context);

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
        setLow(0)
        setHigh(5)
        router.push("/movies/" + props.movieId);
    }

    return (
        <>
            <MovieDetails
                image={props.movieData.image}
                title={props.movieData.title}
                description={props.movieData.description} />


            <div className={classes.reviewContainer}>
                {props.reviews.length > 0 ?
                    <div>
                        <ReviewList
                            reviews={props.reviews.slice(low, high)} />
                        <div className={classes.btnContainer}>
                            <h4> Recensioner
                                {props.reviews.length < high ? " " + low + "-" + props.reviews.length :
                                    " " + low + "-" + high
                                }
                            </h4>

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
                    </div>
                    :
                    <div className={classes.noReviews}>
                        <h3 className={classes.noReviewTitle}> Det finns inga recensioner för denna film ännu </h3>
                    </div>
                }
                <div className={classes.reviewFormContainer}>
                    {context === true ?
                        <ReviewForm
                            handleReview={handleReview}
                            setRating={setRating}
                            rating={rating}
                            setName={setName}
                            name={name}
                            setReview={setReview}
                            review={review} />
                        :
                        <div className={classes.loginReview}>
                            <Link href="/login">
                                <a> Logga in för att lämna en recension </a>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const posters = await pathHelper();

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
    const selectedMovie = await getOnePoster(movieID)
    const reviews = await getReviews(movieID);

    return {
        props: {
            movieData: {
                id: selectedMovie._id.toString(),
                title: selectedMovie.title,
                image: selectedMovie.poster,
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

export default SpecifcMovie; 
