import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const Charts = () => {
  const [chartWidth, setChartWidth] = useState(getWidth());
  const [chartHeight, setChartHeight] = useState(getHeight());

  function getWidth() {
    const width = window.innerWidth;
    return width < 768 ? width - 40 : (width > 1200 ? 560 : width / 2 - 50);  
  }

  function getHeight() {
    const width = window.innerWidth;
    return width < 768 ? 300 : 350; 
  }

  useEffect(() => {
    function handleResize() {
      setChartWidth(getWidth());
      setChartHeight(getHeight());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='max-w-screen-xl mx-auto flex flex-col mt-[100px] mb-[100px] items-center' id='charts'>
        <h2 className='w-full text-3xl mb-8 font-extrabold text-center'>Wykresy</h2>
        <div className='flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-8'>
            <div className='w-full md:w-[48%] flex justify-center items-center flex-col'>
                <h2 className='text-2xl font-bold w-full text-center'>Wykres [jakas nazwa]</h2>
                <p className='w-full text-center'>Krótki opis jeśli będzie trzeba</p>
                <div className="chart-container w-full">
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[{ 
                            data: [2, 5.5, 2, 8.5, 1.5, 5], 
                            color: "#1d4ed8",
                        }]}
                        height={chartHeight}
                        width={chartWidth}
                        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                        grid={{ vertical: true, horizontal: true }}
                    />
                </div>
            </div>
            <div className='w-full md:w-[48%] flex justify-center items-center flex-col mt-[60px] md:mt-0'>
                <h2 className='text-2xl font-bold w-full text-center'>Wykres [jakas nazwa]</h2>
                <p className='w-full text-center'>Krótki opis jeśli będzie trzeba</p>
                <div className="chart-container w-full">
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[{ 
                            data: [2, 5.5, 2, 8.5, 1.5, 5], 
                            color: "#1d4ed8",
                        }]}
                        height={chartHeight}
                        width={chartWidth}
                        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
                        grid={{ vertical: true, horizontal: true }}
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Charts;
