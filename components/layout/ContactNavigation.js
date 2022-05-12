import classes from "./AboutUsNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function ContactNavigation() {

    const router = useRouter();

    return (
        <nav className={classes.aboutUsNav}>
            <ul className={classes.aboutUsMenu}>
                <li>
                    <Link href="/contact/contact">
                        <a className={router.pathname == "/contact/contact" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>Kontakt</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact/">
                        <a className={router.pathname == "/contact/test" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>Länkar</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact/accessibility">
                        <a className={router.pathname == "/contact/accessibility" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>test</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact/faq">
                        <a className={router.pathname == "/contact/faq" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>test</a>
                    </Link>
                </li>
            </ul >
        </nav >
    )
}

export default ContactNavigation; 