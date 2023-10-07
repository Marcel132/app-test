import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import '../css/main.css'

export function Home() {
  return (
    <div className="container flex_center">
      <h1>Witaj</h1>
      <div className="buttons_box">
      <Link to="/login"><button className="buttons">Zaloguj się</button></Link>
      <Link to="/game_0"><button className="buttons">Rozpocznij grę</button></Link>
      </div>

      <div id="money"> Twoje saldo: </div>
    </div>
  )
}

// Login and SignUp components

export function Login() {

  const navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });

      if (response.ok) {
        navigate('./game_0')
      } else {
        setLoginError("Niepoprawne dane logowania.");
      }
    } catch (error) {
      console.error(error);
      setLoginError("Wystąpił błąd podczas logowania.");
    }
  };

  return (
    <div className="container flex_center">
      <h1>Logowanie</h1>
      <form className="forms_login_signup flex_center" onSubmit={handleLoginSubmit}>
        <label htmlFor="user_name-login">Nazwa Użytkownika:</label>
        <input
          type="text"
          id="user_name-login"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password-login">Hasło:</label>
        <input
          type="password"
          id="password-login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Zaloguj" className="submit_button" />
      </form>
      {loginError && <p>{loginError}</p>}
      <Link to="/signup"><button className="button_go">Nie masz jeszcze konta? <strong>Zarejestruj się</strong></button></Link>
      <Link to="/">Powrót na stronę główną</Link>
    </div>
  );
}

export function SignUp() {
  return (
    <div className="container flex_center">
      <h1>Rejestracja</h1>
      <form className="forms_login_signup flex_center" id="login_form">
        <label for="user_name-signup">Nazwa Użytkownika: </label>
        <input 
        type="text" 
        id="user_name-signup" />
        <label for="password-signup">Hasło: </label>
        <input 
        type="password" 
        id="password-signup" />
        <input value="Zarejestruj sie" type="submit" id="submit-signup" className="submit_button"  />
      </form>
      <Link to="/login"><button id="button-go-login" className="button_go">Masz już konto? <strong>Zaloguj się</strong></button></Link>
      <Link to="/">Powrót na stronę główną</Link>
    </div>
    )
}

export function StartGame() {
  return (
  <div className="container flex_center">
    <h1>Start Game</h1>

  </div>
  )
}