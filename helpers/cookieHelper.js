import Cookies from "cookies";
import Iron from "@hapi/iron";
import { ENC_KEY } from "../pages/api/login";

export async function checkForCookie(req, res) {

    const cookies = new Cookies(req, res);
    const sessionStr = cookies.get("loggedin");

    if (sessionStr) {
        try {
            const session = await Iron.unseal(sessionStr, ENC_KEY, Iron.defaults);
            if (session.loggedIn) {
                return {
                    loggedIn: true
                }
            }
        } catch (err) {
            // Incorrect encrypted string. Proceed to notFound
        }
    }
    return {
        loggedIn: false
    }
}
