import MainNavigation from "./MainNavigation";
import MainHero from "./MainHero";
import classes from "./Layout.module.css";

function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <MainHero />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}

export default Layout;
