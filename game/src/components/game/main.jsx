import React from "react";
import { Link } from 'react-router-dom'


export function Home() {
  return (
    <div className="container flex_center">
      <h1>Witaj</h1>
      <div className="buttons_box">
      <Link to="/login"><button className="buttons">Zaloguj się</button></Link>
      <Link to="/game_0"><button className="buttons">Rozpocznij grę</button></Link>
      </div>
    </div>
  )
}

export function Login() {
  return (
  <div className="container flex_center">
    <h1>Login</h1>

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