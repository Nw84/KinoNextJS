import Cookies from "cookies";

export default async function logoutHandler(req, res) {

    if (req.method == "POST") {
        if (req.body.logout) {
            const cookies = new Cookies(req, res);
            let expires = cookies.get("expires", { maxAge: 3, overwrite: true })
            cookies.set("loggedin", expires);
            res.status(200).end();
        }
    } else {
        res.status(405).end();
    }
}

