import classes from "./AboutUsNavigation.module.css";

function AboutUsNavigation() {
    return (
        <nav className={classes.aboutUsNav}>
            <ul className={classes.aboutUsMenu}>
                <li><a className={classes.menuText} href="/aboutus/history">Historia</a></li>
                <li><a className={classes.menuText} href="/aboutus/policy">Policy</a></li>
                <li><a className={classes.menuText} href="/aboutus/tillganglighet">Tillgänglighet</a></li >
                <li><a className={classes.menuText} href="/aboutus/faq">FAQ</a></li >
            </ul >
        </nav >
    )
}

export default AboutUsNavigation; 