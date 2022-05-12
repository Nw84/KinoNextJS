import classes from "./LoginForm.module.css";

function LoginForm({ handleSubmit, setPassword, setUsername }) {
  function submitLogin(event) {
    event.preventDefault();

    handleSubmit();
  }

  return (
    <div className={classes.loginContent}>
      <h1>Logga in</h1>
      <form onSubmit={submitLogin}>
        <input
          autoComplete="Ange ditt användarnamn"
          placeholder="Användarnamn"
          type="text"
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          autoComplete="Ange ditt lösenord"
          placeholder="Lösenord"
          type="password"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <input type="radio" value="cookies" />
        Allow cookies
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;
