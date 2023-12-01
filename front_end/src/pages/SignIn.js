import React from 'react'
import HeaderProfile from '../components/HeaderProfile'
import Footer from '../components/Footer'

const SignIn = () => {
  return (
    <>
      <HeaderProfile />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* Placeholder link for static site */}
            <a href="./user.html" className="sign-in-button">Sign In</a>
            {/* Should be the button below */}
            {/* <button className="sign-in-button">Sign In</button> */}
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SignIn
