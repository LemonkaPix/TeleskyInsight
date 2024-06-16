import React from 'react'

const Charts = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col mt-[100px] border-2 b-red-500'>
        <h2 className='w-full text-3xl mb-8 font-extrabold'>Wykresy</h2>
        <div className='flex flex-col md:flex-row justify-between'>
            <div className='w-[45%] border-2'>
                <h2 className='text-2xl font-bold'>wykres [jakas nazwa]</h2>
                <p>krótki opis jeśli będzie trzeba</p>
                {/* tutaj chce przykładowy wykres */}
            </div>
            <div className='w-[45%] border-2'>
                <h2 className='text-2xl font-bold'>wykres [jakas nazwa]</h2>
                <p>krótki opis jeśli będzie trzeba</p>
            </div>
        </div>
    </div>
  )
}

export default Charts