import React from 'react'
import GiftCardSection from '../Components/HomeGift'
import FindLocation from '../Components/AboutLocation'
import StoneyRiverMenu from '../Components/AboutMenu'
import AboutHero from '../Components/AboutHero'
import CareerSection from '../Components/AboutCareer'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <FindLocation/>
      <StoneyRiverMenu/>
      <GiftCardSection/>
      <CareerSection/>
    </div>
  )
}

export default About
