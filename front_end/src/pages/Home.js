import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FeaturesSection from '../components/FeaturesSection'
// import Hero from './Hero'


const Home = () => {
  return (
    <>
      <Header/>
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
        <FeaturesSection />
      </main>
      <Footer/>
    </>
  )
}

export default Home
