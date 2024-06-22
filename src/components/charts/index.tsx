import { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const Charts = () => {
  const [chartWidth, setChartWidth] = useState(getWidth());
  const [chartHeight, setChartHeight] = useState(getHeight());


  function getWidth() {
    const width = window.innerWidth;
    return width < 768 ? width - 40 : (width > 1200 ? 1000 : width / 2 - 50);  
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
        <h2 className='w-full text-3xl mb-8 font-extrabold text-center'>Odczyty</h2>
        <div className='flex flex-col md:flex-row justify-between items-center space-x-0 md:space-x-8'>
            <div className='w-full md:w-[100%] flex justify-center items-center flex-col'>
                <h2 className='text-2xl font-bold w-full text-center'>Aktywność słoneczna</h2>
                <p className='w-full text-center'>a.u. względem czasu</p>
                <div className="chart-container w-full">
                    <LineChart
                        xAxis={[
                            {
                                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207]
                            }
                        ]}
                        series={[{ 
                            data: [1843, 1844, 1846, 1843, 1841, 1840, 1840,  1841, 1840, 1840, 1842, 1843, 1840, 1840, 1840, 1840, 1840, 1840, 1840, 1844, 1843, 1847, 1849, 1850, 1848, 1845, 1842, 1840, 1840, 1842, 1842, 1846, 1849, 1847, 1851, 1847, 1849, 1849, 1848, 1849, 1851, 1850, 1850, 1846, 1845, 1846, 1844, 1844, 1847, 1845, 1847, 1845, 1847, 1846, 1848, 1844, 1843, 1840, 1842, 1846, 1846, 1843, 1847, 1851, 1848, 1849, 1851, 1847, 1846, 1847, 1843, 1840, 1840, 1840, 1840, 1843, 1846, 1849, 1849, 1850, 1850, 1854, 1851, 1849, 1846, 1845, 1843, 1840, 1840, 1840, 1842, 1840, 1843, 1844, 1842, 1846, 1844, 1847, 1848,1840, 1844, 1848, 1852, 1856, 1860, 1856, 1852, 1858, 1864, 1870, 1866, 1862, 1858, 1854, 1850, 1854, 1858, 1862, 1866, 1870, 1866, 1862, 1858, 1854, 1850, 1854, 1858, 1862, 1866, 1870, 1866, 1862, 1858, 1854, 1850, 1854, 1858, 1862, 1866, 1870, 1849, 1853, 1854, 1853, 1854, 1851, 1850, 1847, 1846, 1845, 1847, 1843, 1844, 1840, 1840, 1841, 1845, 1841, 1840, 1840, 1840, 1840, 1841, 1842, 1841, 1841, 1844, 1843, 1845, 1844, 1845, 1847, 1848, 1846, 1842, 1846, 1848, 1848, 1847, 1844, 1845, 1845, 1841, 1845, 1849, 1846, 1848, 1847, 1851, 1849, 1850, 1850, 1850, 1851, 1853, 1857, 1860, 1862, 1860, 1859, 1856, 1857, 1861, 1859, 1859, 1856, 1856], 
                            // data: [1,2,3,4,5],
                            showMark: false,
                            color: "#1d4ed8",
                        }]}
                        height={chartHeight}
                        width={chartWidth}
                        margin={{ right: 30, top: 30, bottom: 30 }}
                        grid={{ vertical: false, horizontal: true }}
                        // yAxis={[{label: ""}]}
                    />
                </div>
            </div>
            {/* <div className='w-full md:w-[48%] flex justify-center items-center flex-col mt-[60px] md:mt-0'>
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
            </div> */}
        </div>
    </div>
  );
};

export default Charts;
