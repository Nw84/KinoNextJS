import classes from './ScreeningItem.module.css';

function ScreeningItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.card}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h2>{props.title}</h2>
                    <h6>{props.date}</h6>
                    <h6>{props.seats}</h6>
                </div>
                <div className={classes.actions}>
                    <button>Boka</button>
                </div>
            </div>
        </li>
    );
}

export default ScreeningItem; 