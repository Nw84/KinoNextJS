import { useRouter } from "next/router";
import Button from "../../components/ui/Button";
import LoginForm from "../../components/login/LoginForm";
import RegistrationForm from "../../components/login/RegistrationForm";
import { useState, useEffect } from "react";

import React, { useContext } from "react";
import { Context } from "../_app";

import classes from "../../styles/login.module.css";
import { checkForCookie } from "../../helpers/cookieHelper";

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [pageState, setPageState] = useState("login");
    const [loggedIn, setLoggedIn] = useContext(Context);

    const router = useRouter();
    const [error, setError] = useState("");

    useEffect(() => {
        if (props.loggedIn.loggedIn === true) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    });

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
        setError("")
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
        }).then((res) => res.json())
            .then((data) => {
                setError(data);
            });
        router.push("/login");
    }

    async function handleRegistration() {
        await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                username: user,
                password: pwd
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => res.json())
            .then((data) => {
                setError(data);
            });
    }

    if (loggedIn) {
        return (
            <div className={classes.loginContainer}>
                <h1>Välkommen tillbaka</h1>
                <Button onClick={handleLogout}>Logga ut</Button>
            </div>
        )
    } if (pageState == "login") {
        return (
            <div className={classes.loginContainer}>
                <LoginForm handleSubmit={handleSubmit} setPassword={setPassword} setUsername={setUsername} />
                <span className={classes.error}>{error}</span>
                <p>Registrera dig här om du inte har ett konto:</p>
                <Button onClick={() => (setPageState("registration"), setError(""))}>Registrera Konto</Button>
            </div>
        )
    } else if (pageState == "registration") {
        return (
            <div className={classes.loginContainer}>
                <RegistrationForm handleRegistration={handleRegistration} setUser={setUser} setPwd={setPwd} />
                <span className={classes.error}>{error}</span>
                <p>Har du redan ett konto, så logga in här:</p>
                <Button onClick={() => (setPageState("login"), setError(""))}>Logga in</Button>
            </div>

        )
    }
}

export async function getServerSideProps(context) {
    const result = await checkForCookie(context.req, context.res);

    return {
        props: {
            loggedIn: result,
        },
    }
};



export default Login;