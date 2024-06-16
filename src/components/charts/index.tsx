import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const Charts = () => {

  return (
    <div className='max-w-screen-xl mx-auto flex flex-col mt-[100px] mb-[100px]'>
        {/* <h2 className='w-full text-3xl mb-8 font-extrabold  text-center xl:text-start'>Wykresy</h2> */}
        <div className='flex flex-col xl:flex-row justify-between items-center'>
            <div className='w-[95%] md:w-[55%] flex justify-center items-center flex-col'>
                <h2 className='text-2xl font-bold w-full'>wykres [jakas nazwa]</h2>
                <p className='w-full'>krótki opis jeśli będzie trzeba</p>
                <div className="chart-container w-[100%]">
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[{ 
                            data: [2, 5.5, 2, 8.5, 1.5, 5], 
                            color: "#1d4ed8",
                            }
                        ]}
                        height={350}
                        width={560}
                        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                        grid={{ vertical: true, horizontal: true }}
                    />
                </div>
            </div>
            <div className='w-[95%] md:w-[55%] flex justify-center items-center flex-col mt-[60px] xl:mt-0'>
                <h2 className='text-2xl font-bold w-full'>wykres [jakas nazwa]</h2>
                <p className='w-full'>krótki opis jeśli będzie trzeba</p>
                <div className="chart-container w-[100%]">
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[{ 
                            data: [2, 5.5, 2, 8.5, 1.5, 5], 
                            color: "#1d4ed8",
                            }
                        ]}
                        height={350}
                        width={560}
                        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                        grid={{ vertical: true, horizontal: true }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Charts