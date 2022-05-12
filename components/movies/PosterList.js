import PosterItem from "./PosterItem";
import classes from "./PosterList.module.css";

function PosterList(props) {
    return (
        <ul className={classes.list}>
            {props.posters.map((poster) => (
                <PosterItem
                    key={poster.id}
                    title={poster.title}
                    poster={poster.poster} />
            ))}
        </ul>
    )
}

export default PosterList; 