import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import Platform from '../components/Platform';
import MarketData from '../components/MarketData';
import Disclaimer from '../components/Disclaimer';
import Principal from '../components/Principal';

function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Principal />
      <Platform />
      <MarketData />
      <Disclaimer />
      <Footer />
    </>
  )
}

export default Home