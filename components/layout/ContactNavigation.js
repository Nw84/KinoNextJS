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
                    <Link href="/contact/faq">
                        <a className={router.pathname == "/contact/faq" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>Frågor</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact/age">
                        <a className={router.pathname == "/contact/age" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>Åldersgränser</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact/safety">
                        <a className={router.pathname == "/contact/safety" ? `${classes.active} ${classes.menuText}` : `${classes.menuText}`}>Säkerhet på bio</a>
                    </Link>
                </li>
            </ul >
        </nav >
    )
}

export default ContactNavigation; 