import PosterItem from "./PosterItem";
import classes from "./PosterList.module.css";

function PosterList(props) {
    return (
        <ul className={classes.list}>
            {props.posters.map((poster) => (
                <PosterItem
                    key={poster.id}
                    title={poster.title}
                    image={poster.image} />
            ))}
        </ul>
    )
}

export default PosterList; 