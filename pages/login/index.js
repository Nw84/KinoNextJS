import { useState } from "react";

function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");

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

export default login;