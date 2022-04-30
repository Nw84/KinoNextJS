import classes from './ScreeningItem.module.css';
import Button from '../ui/Button';

function ScreeningItem(props) {
    return (
        <li className={classes.item}>
            <div className={classes.card}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                    <span className={classes.tag}>{props.time}</span>
                </div>
                <div className={classes.content}>
                    <div className={classes.contentInner}>
                        <h2 className={classes.title}>{props.title}</h2>
                        <p className={classes.date}>Datum: {props.date}</p>
                        <p className={classes.seats}>Lediga platser: {props.seats}</p>
                        <p>Betyg: 4.5/5</p>
                        <Button>Boka</Button>

                    </div>
                </div>
            </div>
        </li>
    );
}

export default ScreeningItem; 