import classes from "./MovieDetails.module.css";

function MovieDetails(props) {
    return (
        <section className={classes.detail}>
            <img
                className={classes.image}
                src={props.image}
                alt={props.title}
            />
            <div className={classes.content}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </section>
    )
}

export default MovieDetails; 