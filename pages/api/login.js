import bcrypt from "bcrypt";
import Cookies from "cookies";
import { getAllUsers } from "../../helpers/getAllUsers";

export default async function loginHandler(req, res) {
    const users = await getAllUsers();
    const mapped = users.map((user) => {
        if (req.body.username == user.name) {
            if (req.body.password == user.password) {
                console.log("Hej")
            }
        }
    })

    console.log(users[0].password)


    if (req.method == "POST") {
        console.log(req.body)
        const { username, password } = req.body;

        //const isCorrect = await bcrypt.compare(req.body.password, "okay")



        if (req.body.password == users[0].password) {
            const cookies = new Cookies(req, res);
            cookies.set("loggedin", "yes");
        }

        res.status(200).end();
    }
}