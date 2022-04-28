import AboutUsNavigation from "../../../components/layout/AboutUsNavigation"

import classes from "../../../styles/AboutUs.module.css";

function faq() {
    return <div>
        <AboutUsNavigation />
        <div className={classes.aboutUsSpace}>
            <div className={classes.aboutUsItem}>
                <h1>Frågor och svar</h1>                
                <h2>Lorem ipsum</h2>
                <h3>Sed ut perspiciatis unde omnis iste natus error.</h3>
                <h2>Lorem ipsum</h2>
                <h3>Sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo.</h3>
                <h2>Lorem ipsum</h2>
                <h3>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</h3>
                <h2>Lorem ipsum</h2>
                <h3>Sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</h3>
            </div>

        </div>
    </div>




}

export default faq; 