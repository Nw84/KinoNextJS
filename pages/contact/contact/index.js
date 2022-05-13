import ContactNavigation from "../../../components/layout/ContactNavigation";

import classes from "../../../styles/aboutUs.module.css";

function contact() {
    return <div>
        <ContactNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>

                <h1>Kontakta oss!</h1>
                <h2>Telefon:</h2>
                <p>Under våra öppetider går det utmärkt att kontakta oss på telefon:</p>
                <p>+46 1234 56</p>

                <h2>Mail:</h2>      
                <p>Du kan maila oss när du vill men oftast svarar vi dagtid alla dagar.</p>
                
                <h2>Öppetider</h2>
                <p>Våra ordinarie öppetider är:</p>
                <p>mån-tor: 11.30-23.00 </p>
                <p>fre-lör: 11.30 - 01.00</p>
                <p>sön: 14.00 - 23.00 </p>

            </div>
        </div>
    </div>



}

export default contact; 