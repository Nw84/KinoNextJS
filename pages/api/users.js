import bcrypt from "bcrypt";
import { regUser, getUser } from "../../helpers/userHelper";


export default async function userHandler(req, res) {
    if (req.method == "POST") {

        const saltRounds = 10;
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(req.body.password, salt, async function(err, hash) {
                const data = {
                    name: req.body.username,
                    password: hash
                } 
                const test = await getUser(req.body.username)
                console.log(test)
                let result;
                if (test.length < 1) {
                    result = await regUser(data); 
                    return res.status(200).json("Ny användare skapad")
                    } else {
                    return res.status(400).json("Användarnamnet finns redan, välj något annat")
                }
            })
        });
        
    }  else {
        return res.status(405)
    } 
}
