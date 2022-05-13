import ContactNavigation from "../../../components/layout/ContactNavigation";

import classes from "../../../styles/aboutUs.module.css";

function age() {
    return <div>
        <ContactNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>
                <h1>Är åldergräns på film en rekommendation?</h1>
                <p>Nej. Om en film har en låg åldergräns eller är barntillåten betyder det inte att det är den ålder som filmen riktar sig emot,
                    eller som vi rekommenderar filmen för.</p>

                <p>Filmens åldergräns betyder att den uppfyller de kriterier för att visas den för de som uppfyller åldergränsen.
                    Det är alltid vuxna som ansvarar för det filminnehåll som barnet tar del utav.</p>

                <p>15-årsgräns innebär att man utan vuxens sällskap ska ha fyllt 15 år och också kan styrka detta vid insläpp till filmen.
                    Från och med 11 års ålder kan man i vuxens sällskap se filmer med 15-årsgräns. Som vuxen räknas den som fyllt 18 år och är myndig.</p>

                <p>11-årsgräns innebär att man, för att se på filmen utan vuxet sällskap, måste ha fyllt 11 år. I vuxens sällskap är det tillåtet att se filmen från 7 års ålder.</p>

                <p>Som biografägare och som arena för publika visningar av film är vi skyldiga att kontrollera att lag om åldersgränserna följs</p>
            </div>
        </div>
    </div>





}

export default age; 