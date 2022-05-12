import classes from "./RegistrationForm.module.css";

function RegistrationForm({ handleRegistration, setUser, setPwd }) {
  function submitRegistration() {

    handleRegistration();
  }

  return (
    <div className={classes.RegistrationContent} >
      <h1>Registrera Användare</h1>
      <form onSubmit={submitRegistration}>
        <input
          autoComplete="Mitt unika användarnamn"
          placeholder="Användarnamn"
          type="text"
          onChange={(ev) => setUser(ev.target.value)}
        />
        <input
          autoComplete="Mitt säkra lösenord"
          placeholder="Lösenord"
          type="password"
          onChange={(ev) => setPwd(ev.target.value)}
        />
        <input className={classes.regButton} type="submit" />
      </form>
    </div >
  );
}

export default RegistrationForm;
