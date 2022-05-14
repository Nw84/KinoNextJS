import Cookies from "cookies";
import Iron from "@hapi/iron";
import { ENC_KEY } from "../api/login";
import { useRouter } from "next/router";
import Button from "../../components/ui/Button";
import LoginForm from "../../components/login/LoginForm";
import RegistrationForm from "../../components/login/RegistrationForm";
import { useState, useEffect } from "react";

import React, { useContext } from "react";
import { Context } from "../_app";

import classes from "../../styles/login.module.css";

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
        if (props.loggedIn === true) {
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