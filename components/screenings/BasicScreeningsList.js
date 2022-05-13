import classes from './BasicScreeningsList.module.css';

function BasicScreeningsList(props) {
    return (
        <div className={classes.container}>
            <ul className={classes.list}>
                {props.screenings.map((screening) => (
                    <li key={screening.id} >{screening.date} {screening.time} {screening.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default BasicScreeningsList;
