import ContactNavigation from "../../../components/layout/ContactNavigation";

import classes from "../../../styles/aboutUs.module.css";

function safety() {
    return <div>
        <ContactNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>
                <h1>test3</h1>
                <div className={classes.coronaImg}>
                <img src='/corona.jpg' />
            </div>
            </div>
        </div>
    </div>



}

export default safety; 