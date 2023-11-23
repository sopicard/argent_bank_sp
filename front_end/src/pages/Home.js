import React from 'react'
import HeaderProfile from '../components/HeaderProfile'
import Footer from '../components/Footer'
// import Hero from './Hero'
// import Features from './Features'

const Home = () => {
  return (
     <div>
        <HeaderProfile/>
            <main>
              <div className="hero">
                <section className="hero-content">
                  <h2 className="sr-only">Promoted Content</h2>
                  <p className="subtitle">No fees.</p>
                  <p className="subtitle">No minimum deposit.</p>
                  <p className="subtitle">High interest rates.</p>
                  <p className="text">Open a savings account with Argent Bank today!</p>
                </section>
              </div>

              {/* <Features /> */}
            </main>
        <Footer/>
    </div>
  )
}

export default Home
