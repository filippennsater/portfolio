import React from 'react'
import '../../../App.css'
import CardsSection from './CardsSection';
import HomeSection from './HomeSection'
import Footer from '../../Footer';

function Home (){
    return (
    <>
      <HomeSection/>
      <CardsSection/>
      <Footer/>
    </>
    );
}

export default Home;