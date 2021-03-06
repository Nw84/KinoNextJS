import bcrypt from "bcrypt";
import Cookies from "cookies";
import { getUser } from "../../helpers/userHelper";
import Iron from "@hapi/iron";

export const ENC_KEY =
    "v<4h*y!9:wGz,=vkxrP.#9P8dT!ua%=;S56qQ}Nn32`3RXhu}}8y'?_>J9<E&Dz*";

export default async function loginHandler(req, res) {

    if (req.method == "POST") {
        const { username, password } = req.body;
        const user = await getUser(username);

        if (user.length > 0) {
            const isCorrect = await bcrypt.compare(password, user[0].password)

            if (isCorrect) {
                const cookies = new Cookies(req, res);
                cookies.set("loggedin", await Iron.seal(
                    {
                        username: username,
                        loggedIn: true,
                    }, ENC_KEY,
                    Iron.defaults
                )
                );
                return res.status(200).json("Välkommen!");
            } else {
                return res.status(403).json("Felaktigt lösenord")
            }
        } else {
            return res.status(401).json("Det finns ingen användare med det namnet")
        }
    } else {
        res.status(405).end();
    }
}