import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './navbar.module.css'
function Navbar() {
  return (
    <div>
      <header className={style.header}>
        <div className={style.head}>
      <img src="https://wallpapercave.com/wp/wp7896341.jpg" alt="anime" className={style.I} />
     <h1>Anime</h1>
      </div>
      <nav>
    <ul >
        <li >
            <NavLink activeClassName={style.bv} to="/introduction">Introduction</NavLink>
            </li>
        <li><NavLink activeClassName={style.bv} to="/topanime">Top Anime</NavLink></li>
        <li><NavLink activeClassName={style.bv} to="/topfights">Top Action Fights</NavLink></li>
        <li><NavLink activeClassName={style.bv} to="/topmanga">Manga Panels</NavLink></li>
    </ul>
    </nav>
      </header>
    </div>
  )
}

export default Navbar
