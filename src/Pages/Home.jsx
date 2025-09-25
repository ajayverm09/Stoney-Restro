import React from 'react'
import HeroSection from '../Components/HomeHero'
import DiningSection from '../Components/HomeDining'
import GiftCardSection from '../Components/HomeGift'
import DiningGallery from '../Components/HomeInsta'
import VipSection from '../Components/HomeVip'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <HeroSection/>
        <DiningSection/>
        <GiftCardSection/>
        <DiningGallery/>
        <VipSection/>

    </div>
  )
}

export default Home
