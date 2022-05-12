import AboutUsNavigation from "../../../components/layout/AboutUsNavigation"
import classes from "../../../styles/aboutUs.module.css";

function history() {
    return <div>
        <AboutUsNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>
                <h1>Historia</h1>
                <h3>Ytterhogdals bio tillhör Folkets bio. Folkets Bio startades 1973 för att filmer som inte den kommersiella
                    branschen ville visa skulle få möjlighet att möta en publik. Så byggdes en aktivistdriven kedja av biografer med egen import och distribution.</h3>
                <h3>Biografen hittar du på Folkets hus. Här finns Härjedalens största filmduk och plats för många biosugna gäster. I oktober 2012 digitaliserades biografen,
                    och sedan dess visas premiärer tidigare än förr. Man hoppas även i framtiden kunna direktsända konserter och andra evenemang.</h3>
                <h3>Varmt Välkommen</h3>
            </div>
            <br></br>
            <div className={classes.bioImg}>
                <img src='/yhbio.jpg' />
            </div>

        </div>
    </div>




}

export default history; 