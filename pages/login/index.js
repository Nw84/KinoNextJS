import Cookies from "cookies";
import Iron from "@hapi/iron";
import { ENC_KEY } from "../api/login";
import { useRouter } from "next/router";

import { useState } from "react";

function login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");

    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();

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

    async function handleRegistration(event) {
        event.preventDefault();

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
            <div>Hej</div>
        )
    } else {
        return (
            <div>
                <h1>Logga in</h1>
                <form onSubmit={handleSubmit} >
                    <input
                        placeholder="Användarnamn"
                        type="text"
                        value={username}
                        onChange={(ev) => setUsername(ev.target.value)}
                    />
                    <input
                        placeholder="Lösenord"
                        type="password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <input type="radio" value="cookies" />Allow cookies
                    <input type="submit" />
                </form>
                <h1>Registrera Användare</h1>
                <form onSubmit={handleRegistration} >
                    <input
                        placeholder="Användarnamn"
                        type="text"
                        value={user}
                        onChange={(ev) => setUser(ev.target.value)}
                    />
                    <input
                        placeholder="Lösenord"
                        type="password"
                        value={pwd}
                        onChange={(ev) => setPwd(ev.target.value)}
                    />
                    <input type="submit" />
                </form>
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



export default login;