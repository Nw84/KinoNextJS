import AboutUsNavigation from "../../../components/layout/AboutUsNavigation"
import classes from "../../../styles/AboutUs.module.css";

function a11y() {
    return <div>
        <AboutUsNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>
                <h1>Tillgänglighet</h1>

                <p>Vi på Kino jobbar aktivt med tillgängligheten på vår biograf.
                    Biografen är anpassad för rullstol och salongerna är utrustade med hörslingor.
                </p>

                <h3> Film med syntolkning och uppläst svensk text </h3>

                <p> Vissa filmer förses med uppläst text och/eller syntolkning. Dessa ljudspår är kopplade till en mobilapplikation,
                    är oberoende av biografens teknik och fungerar överallt där den aktuella filmen visas.
                    Användare av tjänsten tar del av ljudspåret med sina mobilhörlurar/headset och övrig publik påverkas därmed inte.
                </p>

                <p> Syntolkning och uppläst textremsa innebär att personer med synnedsättning och långsamtläsande ska kunna ta del av filmutbudet på en biograf.
                </p>
            </div>
        </div>
    </div>
}

export default a11y; 
