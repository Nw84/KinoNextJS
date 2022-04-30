import ScreeningItem from './ScreeningItem';
import classes from './ScreeningsList.module.css';

function ScreeningsList(props) {
    return (
        <ul className={classes.list}>
            {props.screenings.map((screening) => (
                <ScreeningItem
                    key={screening.id}
                    id={screening.id}
                    image={screening.image}
                    title={screening.title}
                    date={screening.date}
                    seats={screening.seats}
                    time={screening.time}
                />
            ))}
        </ul>
    );
}

export default ScreeningsList;
