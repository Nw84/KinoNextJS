import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MainNavigation() {

    const router = useRouter();

    return (
        <header className={classes.header}>
            <Link href='/'>
                <a className={classes.logo} />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/movies'>
                            <a className={router.pathname == '/movies' ? `${classes.active} ${classes.mainMenuText}` : `${classes.mainMenuText}`}>Filmer</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/tickets'>
                            <a className={router.pathname == '/tickets' ? `${classes.active} ${classes.mainMenuText}` : `${classes.mainMenuText}`}>Biljetter</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/aboutus/history'>
                            <a className={router.pathname.slice(0, 8) == '/aboutus' ? `${classes.active} ${classes.mainMenuText}` : `${classes.mainMenuText}`}>Om oss</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a className={router.pathname.slice(0, 8) == '/contact' ? `${classes.active} ${classes.mainMenuText}` : `${classes.mainMenuText}`}>Kontakt</a>
                        </Link>
                    </li>
                    <li className={classes.login}>
                        <Link href='/login'>
                            <a className={router.pathname == '/login' ? `${classes.active} ${classes.mainMenuText}` : `${classes.mainMenuText}`}>Logga in</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
