import classes from "./Footer.module.css";

function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.info}>
                <h2>Kino Ytterhogdal</h2>
                <p>Att se de senaste filmerna på bio är en speciell upplevelse. Luta dig tillbaka och njut av en gemensam aktivitet.</p>
            </div>
            
            <div className={classes.openingHours}>
                <h2>Öppettider</h2>
                <p>mån-tor: 11.30-23.00 </p>
                <p>fre-lör: 11.30 - 01.00</p>
                <p>sön: 14.00 - 23.00 </p>
            </div>

            <div className={classes.contact}>
                <h2>Kontakt</h2>
                <p>Tel: +46 123456</p>
                <p>Epost: bio@kino.com</p>
                <p>Adress: Hogdalsvägen 3 84090 Ytterhogdal, Sweden</p>
            </div>

            <div className={classes.SocialMediaContent}>
                <ul className={classes.socialMediaList}>
                    <li className={classes.logo}>
                        <a href="https://www.instagram.com/">
                            <div className={classes.insta} />
                        </a>
                    </li>
                    <li className={classes.logo}>
                        <a href="https://www.facebook.com/">
                            <div className={classes.fb} />
                        </a>
                    </li>
                    <li className={classes.logo}>
                        <a href="https://www.twitter.com/">
                            <div className={classes.twitter} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer; 