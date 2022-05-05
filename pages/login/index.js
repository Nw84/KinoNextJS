import Cookies from "cookies";
import Iron from "@hapi/iron";
import { ENC_KEY } from "../api/login";
import { useRouter } from "next/router";
import Button from "../../components/ui/Button";
import LoginForm from "../../components/login/LoginForm";
import RegistrationForm from "../../components/login/RegistrationForm";
import { useState } from "react";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [pageState, setPageState] = useState("login");

    const router = useRouter();

    async function handleLogout() {

        await fetch("/api/logout", {
            method: "POST",
            body: JSON.stringify({
                logout: true
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        router.push("/login");
    }

    async function handleSubmit() {
        await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        router.push("/login");
    }

    async function handleRegistration() {
        console.log(user);
        console.log(pwd);
        await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                username: user,
                password: pwd
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    if (props.loggedIn) {
        return (
            <div>
                <h1>Välkommen tillbaka</h1>
                <Button onClick={handleLogout}>Logga ut</Button>
            </div>
        )
    } if (pageState == "login") {
        return (
            <div>
                <LoginForm handleSubmit={handleSubmit} setPassword={setPassword} setUsername={setUsername} />
                <div>
                    <p>Har du inget konto ? Klicka här för att registrera dig</p>
                    <Button onClick={() => setPageState("registration")}>Registrera Konto</Button>  
                </div>
            </div>
        )
    } else if (pageState == "registration") {
        return (
            <div>
                <RegistrationForm handleRegistration={handleRegistration} setUser={setUser} setPwd={setPwd} />
                <div>
                    <p>Har du redan ett konto, så logga in här</p>
                    <Button onClick={() => setPageState("login")}>Logga in</Button>
                </div>
            </div>
            
        )  
    }    
}

export async function getServerSideProps(context) {
    const cookies = new Cookies(context.req, context.res);
    const sessionStr = cookies.get("loggedin");

    if (sessionStr) {
        try {
            const session = await Iron.unseal(sessionStr, ENC_KEY, Iron.defaults);
            if (session.loggedIn) {
                return {
                    props: {
                        loggedIn: true
                    },
                }
            }
        } catch (err) {
            // Incorrect encrypted string. Proceed to notFound
        }
    }
    return {
        props: {
            loggedIn: false
        },
    }
};



export default Login;