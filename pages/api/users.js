import bcrypt from "bcrypt";
import { regUser } from "../../helpers/userHelper";


export default async function userHandler(req, res) {
    if (req.method == "POST") {

        const saltRounds = 10;

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(req.body.password, salt, async function(err, hash) {
                const data = {
                    name: req.body.username,
                    password: hash
                }
            
                const result = await regUser(data);               
            })
        });
        res.status(200).end();
        
    }  else {
        res.status(405).end();
    } 
}
