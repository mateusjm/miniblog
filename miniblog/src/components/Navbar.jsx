import React from 'react'

// react-router-dom
import { NavLink } from 'react-router-dom'

// CSS
import styles from '../components/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/' className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/login' className={({isActive})=> (isActive ? styles.active : '')}>Entrar</NavLink>
        </li>
        <li>
          <NavLink to='/register' className={({isActive})=> (isActive ? styles.active : '')}>Cadastrar</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar