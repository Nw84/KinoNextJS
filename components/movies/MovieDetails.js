import classes from "./MovieDetails.module.css";

function MovieDetails(props) {
    return (
        <section className={classes.detail}>
            <img
                src={props.image}
                alt={props.title}
            />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </section>
    )
}

export default MovieDetails; 