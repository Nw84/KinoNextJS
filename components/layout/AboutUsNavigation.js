import classes from "./AboutUsNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function AboutUsNavigation() {

    const router = useRouter();

    return (
        <nav className={classes.aboutUsNav}>
            <ul className={classes.aboutUsMenu}>
                <li>
                    <Link href="/aboutus/history">
                        <a className={router.pathname == "/aboutus/history" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>Historia</a>
                    </Link>
                </li>
                <li>
                    <Link href="/aboutus/policy">
                        <a className={router.pathname == "/aboutus/policy" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>Policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/aboutus/accessibility">
                        <a className={router.pathname == "/aboutus/accessibility" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>Tillgänglighet</a>
                    </Link>
                </li>
                <li>
                    <Link href="/aboutus/faq">
                        <a className={router.pathname == "/aboutus/faq" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>FAQ</a>
                    </Link>
                </li>
            </ul >
        </nav >
    )
}

export default AboutUsNavigation; 