import React from 'react'
import logo from '../images/logo.png'
import style from '../NavBar/NavBar.module.css'

export default function NavBar() {
  return (
    <div>
        <div className={style.navbar}>
      <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  )
}
