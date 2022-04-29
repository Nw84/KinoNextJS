import classes from "./AboutUsNavigation.module.css";
import Link from "next/link";

function AboutUsNavigation() {
    return (
        <nav className={classes.aboutUsNav}>
            <ul className={classes.aboutUsMenu}>
                <li><Link className={classes.menuText} href="/aboutus/history">Historia</Link></li>
                <li><Link className={classes.menuText} href="/aboutus/policy">Policy</Link></li>
                <li><Link className={classes.menuText} href="/aboutus/accessibility">Tillgänglighet</Link></li>
                <li><Link className={classes.menuText} href="/aboutus/faq">FAQ</Link></li>
                <li><a className={classes.menuText} href="/aboutus/history">Historia</a></li>
                <li><a className={classes.menuText} href="/aboutus/policy">Policy</a></li>
                <li><a className={classes.menuText} href="/aboutus/accessibility">Tillgänglighet</a></li >
                <li><a className={classes.menuText} href="/aboutus/faq">FAQ</a></li >
            </ul >
        </nav >
    )
}

export default AboutUsNavigation; 