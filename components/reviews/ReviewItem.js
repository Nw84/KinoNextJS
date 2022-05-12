import classes from "./ReviewItem.module.css"

function ReviewItem(props) {
    return (
        <li key={props.id}>
            <div className={classes.review}>
                <div className={classes.partial}>
                    <p className={classes.name}> {props.name} </p>
                    <p> {props.rating}/5 </p>
                </div>
                <p className={classes.comment}> {props.comment} </p>
            </div>
        </li>
    );
}

export default ReviewItem;
