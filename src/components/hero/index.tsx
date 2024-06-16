import React from 'react'
import heroBg from "../../assets/heroBg.png"
import radioTeleskop from "../../assets/radioteleskop.png"
import radioTeleskop2 from "../../assets/radioteleskop2.png"
import mirrorRadioteleskop from "../../assets/mirrorRadioteleskop.png"

const Hero = () => {
  return (
    <div className='heroWrapper w-full h-[50vh] sm:h-[60vh] flex justify-center items-end'>
      <div className='w-[95%] md:w-4/5 xl:w-3/5 h-[30vh] bg bg-opacity-80 bg-black rounded-tl-[34px] rounded-tr-[34px] border-t border-r border-l border-gray-300 shadow-sm'>
        <div className='absolute flex justify-between w-[94%] md:w-[79%] xl:w-[58%] mt-[50px]'>
          <img src={radioTeleskop2} alt="" className='hidden sm:block sm:w-[135px] sm:h-[135px] md:w-[165px] md:h-[165px] ml-[5px] xl:ml-[20px]' />
          <img src={radioTeleskop} alt="" className='hidden sm:block sm:w-[135px] sm:h-[135px] md:w-[165px] md:h-[165px]' />
        </div>
        <div className='px-5 py-10 sm:p-12 text-center flex flex-col items-center'>
          <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white'>Teleksy Insight</h1>
          <p className='w-full sm:w-3/5 text-gray-300 mt-5 text-[13px] sm:text-[15px] md:text-[17px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
        </div>
      </div>
  </div>
  )
}

export default Hero