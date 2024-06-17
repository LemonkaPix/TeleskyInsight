import IntroAbout from "./IntroAbout"
import MainContentAbout from "./MainContentAbout"

const AboutTelescopes = () => {
  return (
    <div className='w-full flex justify-center items-center mt-[50px] flex-col' id="aboutTelescopes">
       <IntroAbout />
       <MainContentAbout />
    </div>
  )
}

export default AboutTelescopes