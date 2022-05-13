import { useRouter } from "next/router"
import classes from "./MovieLink.module.css";

function MovieLink(props) {
    const router = useRouter();

    function showDetailsHandler() {
        router.push("/movies/" + props.id);
    }

    return (
        <li className={classes.item}>
            <a className={classes.image} onClick={showDetailsHandler}>
                <img src={props.poster} alt={props.title} />
            </a>
        </li>
    )
}

export default MovieLink; 