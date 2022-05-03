import bcrypt from "bcrypt";
import Cookies from "cookies";
import { getUser } from "../../helpers/getUser";

//export const ENC_KEY =
//  "$2a$10$87U6ONWv6uQMOqyq5hUrmuqPtcnW/YT7.wUluD183dchvv2srRdRW";

export default async function loginHandler(req, res) {

    if (req.method == "POST") {
        const { username, password } = req.body;
        const user = await getUser(username);
        console.log(user)

        // const inpPwd = JSON.stringify(password);
        // const dbPwd = JSON.stringify(user[0].password)

        const isCorrect = await bcrypt.compare(password, user[0].password)

        console.log(isCorrect)

        if (isCorrect) {
            const cookies = new Cookies(req, res);
            cookies.set("loggedin", "yes");
            res.status(200).end();
        } else {
            res.status(405).end();
        }
    }
}

//            const cookies = new Cookies(req, res);
//                 cookies.set("loggedin", "yes");
//             }

//             res.status(200).end();
//            const cookies = new Cookies(req, res);
//                 cookies.set("loggedin", "yes");
//             }

//             res.status(200).end();
//            const cookies = new Cookies(req, res);
//                 cookies.set("loggedin", "yes");
//             }

//             res.status(200).end();