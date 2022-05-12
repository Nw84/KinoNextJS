import ContactNavigation from "../../../components/layout/ContactNavigation";

import classes from "../../../styles/aboutUs.module.css";

function safety() {
    return <div>
        <ContactNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>
                <h1>Säkerhet</h1>
                <h2>Giltighetstid på presentkort och biljetter</h2>
                <h3>Presentkort är giltiga i ett år från inköpsdatum. Biljetter är giltiga endast den dag och tid du har bokat</h3>
                <h2>Återköp</h2>
                <h3>Vi har tyvärr ingen möjlighet att återköpa biljetter eller presentkort.</h3>
                <h2>GDPR</h2>
                <h3>För oss är våra kunders förtroende av allra största vikt. Vi vet att det förtroendet bland annat bygger på hur vi hanterar
                    den information vi samlar in om dig som kund och vår förmåga att skydda din integritet. Vi utför all insamling och behandling av personuppgifter i enlighet med gällande
                    integritetsskyddslagstiftning. Vi strävar alltid efter att minimera de uppgifter vi behandlar och vi säljer aldrig dina personuppgifter till andra företag.
                    Syftet med denna personuppgiftspolicy är att på ett så tydligt och transparent sätt som möjligt beskriva hur vi samlar in och använder personuppgifter och vad du som kund
                    har rätt att begära av oss när det gäller den hanteringen.</h3>
            </div>
        </div>
    </div>




}

export default safety; 