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
          
          className={classes.loginName}
          required="required"
          autoComplete="Ange ditt användarnamn"
          placeholder="Användarnamn"
          type="text"
          autoFocus
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          className={classes.loginPWD}
          required="required"
          autoComplete="Ange ditt lösenord"
          placeholder="Lösenord"
          type="password"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <div>
          <input 
            className={classes.loginCoockie}
            required="required"
            type="checkbox"  
            value="cookies"
          />
          Allow cookies
        </div>
        <input 
          className={classes.loginBtn}
          type="submit"
          value={"Logga in"}
        />
      </form>
    </div>
  );
}

export default LoginForm;
