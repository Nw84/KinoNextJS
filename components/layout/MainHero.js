import classes from './MainHero.module.css';
import Image from 'next/image';
import profilePic from '../../public/upcoming.png';

function MainHero() {
    return (
        <div className={classes.hero}>
            <div className={classes.upcoming}>
                <Image
                    className={classes.image}
                    src={profilePic}
                    alt="logo"
                />
            </div>
            <h1 className={classes.heroText}>Kommande premiär</h1>
        </div>
    );
};

export default MainHero;