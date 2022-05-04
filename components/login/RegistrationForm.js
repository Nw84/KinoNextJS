function RegistrationForm({ handleRegistration, setUser, setPwd }) {
  function submitRegistration(event) {
    event.preventDefault();

    handleRegistration();
  }

  return (
    <div>
      <h1>Registrera Användare</h1>
      <form onSubmit={submitRegistration}>
        <input
          placeholder="Användarnamn"
          type="text"
          onChange={(ev) => setUser(ev.target.value)}
        />
        <input
          placeholder="Lösenord"
          type="password"          
          onChange={(ev) => setPwd(ev.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
