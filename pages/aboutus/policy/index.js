import AboutUsNavigation from "../../../components/layout/AboutUsNavigation"

import classes from "../../../styles/aboutUs.module.css";

function policy() {
    return <div>
        <AboutUsNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>
                <h1>Allmänt</h1>
                <p>Det övergripande syftet med vår behandling av dina personuppgifter är att kunna administrera din tillgång till, och din användning av,
                    våra tjänster och för att utveckla och förbättra vår verksamhet och din kundupplevelse.</p>
                <p>Vi samlar in personuppgifter om dig på flera sätt, men i första hand direkt från dig när du använder våra digitala tjänster.
                    Vi strävar efter att minimera de uppgifter vi behandlar och vi säljer aldrig dina personuppgifter till andra företag.</p>
                <p>Vi använder inte automatiserat beslutsfattande.</p>
                <p>Vi sparar eller behandlar inte konto- eller kreditkortsuppgifter. Alla betalningar hanteras av vår samarbetspartner Nets.</p>

                <h1>Dina rättigheter</h1>
                <p>Du har rätt att när som helst begära information om de personuppgifter vi har om dig.</p>
                <p>Vi vill upplysa dig om att om du begär registerutdrag så lämnar vi inte personuppgifter som består av bilder från trygghetkamerorna.</p>
                <p>Detta beror, dels på att vi inte har tekniska förutsättningar för att identifiera personer på våra bilder och inte heller att maska bort andra personer som
                    förekommer på bilderna, dels på att bilderna automatiskt raderas efter trettio (30) dagar.</p>
                <p>Du har rätt att begära rättelse av dina personuppgifter om de är felaktiga, inbegripet rätten att komplettera ofullständiga personuppgifter.</p>
                <p>Dina personuppgifter lagras inte längre än det är nödvändigt för att kunna uppfylla ändamålen med behandlingen. 
                 Dina personuppgifter raderas eller anonymiseras när de inte längre är relevanta för de ändamål som de har samlats in för.</p>

            </div>

        </div>
    </div>




}

export default policy; 