import ContactNavigation from "../../../components/layout/ContactNavigation";

import classes from "../../../styles/aboutUs.module.css";

function question() {
    return <div>
        <ContactNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>
                <h1>test2</h1>
            </div>
        </div>
    </div>



}

export default question; 