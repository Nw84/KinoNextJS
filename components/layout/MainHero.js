import classes from './MainHero.module.css';
import profilePic from '../../public/upcoming.png';

function MainHero(props) {
    console.log(props.posters)
    return (
        <div className={classes.hero}>
            <h1 className={classes.heroText}>Kommande premiär</h1>
            <div className={classes.upcoming}>
                {props.posters ?
                    <img
                        className={classes.image}
                        src={props.posters.poster}
                        alt="logo"
                    /> :
                    <img
                        className={classes.image}
                        src={profilePic}
                        alt="logo"
                    />
                }
            </div>
        </div>
    );
};

export default MainHero;