import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/argentBankLogo.png'

const Header = () => {
  return (
    <nav className='main-nav'>
      <Link to='/' className='main-nav-logo'>
        <img
          className='main-nav-logo-image'
          src={logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <Link to='/login' className='main-nav-item'>
        <i className='fa fa-user-circle'></i>
        Sign In
      </Link>

    </nav>
  )
}

export default Header
