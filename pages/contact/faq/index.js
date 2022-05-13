import ContactNavigation from "../../../components/layout/ContactNavigation";

import classes from "../../../styles/aboutUs.module.css";

function question() {
    return <div>
        <ContactNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>
                <h1>Frågor och svar</h1>
                <h1>Giltighetstid på presentkort och biljetter</h1>
                <p>Ge bort en bioupplevelse till någon du bryr dig om! Ett presentkort på bio passar för alla tillfällen och är alltid lika uppskattat!
                Du laddar kortet med pengar som sedan kan användas till biobiljetter, popcorn, godis och mycket mer. Presentkortet är giltigt i två år.</p>
                <h1>Återköp</h1>
                <p>Byte av biljetter är inte möjligt, återköp måste göras även om ni bara vill göra en ändring på köpta biljetter.
                Återköp av köpta biljetter medges inte efter föreställningsstart.</p>
                <h1>GDPR</h1>
                <p>För oss är våra kunders förtroende av allra största vikt. Vi vet att det förtroendet bland annat bygger på hur vi hanterar
                    den information vi samlar in om dig som kund och vår förmåga att skydda din integritet. Vi utför all insamling och behandling av personuppgifter i enlighet med gällande
                    integritetsskyddslagstiftning. Vi strävar alltid efter att minimera de uppgifter vi behandlar och vi säljer aldrig dina personuppgifter till andra företag.
                    Syftet med denna personuppgiftspolicy är att på ett så tydligt och transparent sätt som möjligt beskriva hur vi samlar in och använder personuppgifter och vad du som kund
                    har rätt att begära av oss när det gäller den hanteringen.</p>
            </div>
        </div>
    </div>




}

export default question; 