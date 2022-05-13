import AboutUsNavigation from "../../../components/layout/AboutUsNavigation"

import classes from "../../../styles/aboutUs.module.css";

function faq() {
    return <div>
        <AboutUsNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>
                <h1>Frågor och svar</h1>
                <h2>Giltighetstid på presentkort och biljetter</h2>
                <p>Presentkort är giltiga i ett år från inköpsdatum. Biljetter är giltiga endast den dag och tid du har bokat</p>
                <h2>Återköp</h2>
                <p>Vi har tyvärr ingen möjlighet att återköpa biljetter eller presentkort.</p>
                <h2>GDPR</h2>
                <p>För oss är våra kunders förtroende av allra största vikt. Vi vet att det förtroendet bland annat bygger på hur vi hanterar
                    den information vi samlar in om dig som kund och vår förmåga att skydda din integritet. Vi utför all insamling och behandling av personuppgifter i enlighet med gällande
                    integritetsskyddslagstiftning. Vi strävar alltid efter att minimera de uppgifter vi behandlar och vi säljer aldrig dina personuppgifter till andra företag.
                    Syftet med denna personuppgiftspolicy är att på ett så tydligt och transparent sätt som möjligt beskriva hur vi samlar in och använder personuppgifter och vad du som kund
                    har rätt att begära av oss när det gäller den hanteringen.</p>
            </div>
        </div>
    </div>




}

export default faq; 