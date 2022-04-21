import classes from './MainNavigation.module.css';
import Link from "next/link";

function MainNavigation() {

    return (
        <header className={classes.header}>
            <a
                className={classes.logo}
                href='/'>
            </a>
            <nav>
                <ul>
                    <li>
                        <Link href='/movies'>Movies</Link>
                    </li>
                    <li>
                        <Link href='/kidsmovies'>Kids movies</Link>
                    </li>
                    <li>
                        <Link href='/tickets'>Tickets</Link>
                    </li>
                    <li>
                        <Link href='/aboutus'>About us</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
