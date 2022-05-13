import ContactNavigation from "../../../components/layout/ContactNavigation";

import classes from "../../../styles/aboutUs.module.css";

function safety() {
    return <div>
        <ContactNavigation />
        <div className={classes.safetySpace}>
            <div className={classes.safetyItem}>
                <h1>Säkerhet</h1>            
                <p>Coronaviruset finns fortfarande kvar och vi har fortfarande våra säkerhetsrutiner aktiva</p>                
                <div className={classes.cImg}>
                <img src='/corona.jpg' />                            
                </div>
                <h1>Utökad städning</h1>
                <p>Vi städar oftare och mer noggrant i hela biografen</p>
                <p>Extra kontroller av toaletterna</p>
                <p>På biografen finns speciellt utplacerad stationer med handsprit</p>
                <h1>Vi tar hand om dig</h1>
                <p>Alla som jobbar på biograferna har nya säkerhets- och hygienrutiner</p>
                <p>Där det krävs har personalen skyddsutrustning, såsom ansiktsskydd och handskar</p>                   
            </div>
        </div>
    </div>



}

export default safety; 