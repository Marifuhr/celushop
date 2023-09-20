import React from 'react'
import logo from '../images/logo.png'
import style from '../NavBar/NavBar.module.css'
import Login from '../Login/Login'
import Profile from '../Login/Profile'
import LogoutButton from '../Login/Logout'


export default function NavBar() {
  return (
    <div>
        <div className={style.navbar}>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Login />
      <Profile />
      <LogoutButton />
    </div>
  )
}
