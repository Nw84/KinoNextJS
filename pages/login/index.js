import { useState } from "react";

function login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
        </div>
    )

}

export default login;