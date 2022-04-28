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
                        <Link href='/movies'>Filmer</Link>
                    </li>
                    <li>
                        <Link href='/tickets'>Biljetter</Link>
                    </li>
                    <li>
                        <Link href='/aboutus'>Om oss</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Kontakt</Link>
                    </li>
                    <li className={classes.login}>
                        <Link href='/login'>Logga in</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
