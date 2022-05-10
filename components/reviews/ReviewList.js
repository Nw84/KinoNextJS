import ReviewItem from "./reviewItem";
import classes from "./ReviewList.module.css"

function ReviewList(props) {
    return (
        <>
            <h2 className={classes.title}> Recensioner </h2>
            <div className={classes.container}>
                <ul>
                    {props.reviews.map((review) => (
                        <ReviewItem
                            key={review.id}
                            name={review.name}
                            rating={review.rating}
                            comment={review.comment}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ReviewList; 
