import classes from "./PosterItem.module.css";

function PosterItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={props.poster} alt={props.title} />
            </div>
        </li>
    )
}

export default PosterItem; 