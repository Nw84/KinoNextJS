import classes from "./RegistrationForm.module.css";

function RegistrationForm({ handleRegistration, setUser, setPwd }) {
  function submitRegistration() {

    handleRegistration();
  }

  return (
    <div className={classes.registrationContent} >
      <h1>Registrera Användare</h1>
      <form onSubmit={submitRegistration}>
        <input
          minLength={4}
          className={classes.regName}
          required="required"
          autoComplete="Mitt unika användarnamn"
          placeholder="Användarnamn"
          type="text"
          autoFocus
          onChange={(ev) => setUser(ev.target.value)}
        />
        <input
          minLength={8}
          className={classes.regPWD}
          required="required"
          autoComplete="Mitt säkra lösenord"
          placeholder="Lösenord"
          type="password"
          onChange={(ev) => setPwd(ev.target.value)}
        />
        <input 
          className={classes.regBtn} 
          type="submit" 
          value={"Registrera mig"}
        />
      </form>
    </div >
  );
}

export default RegistrationForm;
