import React from 'react'
import IntroAbout from "./IntroAbout"
import MainContentAbout from "./MainContentAbout"

const AboutTelescopes = () => {
  return (
    <div className='w-full flex justify-center items-center mt-[50px] flex-col'>
       <IntroAbout />
       <MainContentAbout />
    </div>
  )
}

export default AboutTelescopes