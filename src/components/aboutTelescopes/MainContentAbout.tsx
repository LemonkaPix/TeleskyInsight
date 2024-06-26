import radioteleScopeImage from "../../assets/radiotelesko.png"

const MainContentAbout = () => {
  return (
    <div className='bg-[#283593] w-full'>
        <div className='max-w-screen-xl mx-auto flex md:flex-row flex-col justify-between items-center p-5'>
            <div className='md:w-[40%] w-[90%] py-10'>
                <img src={radioteleScopeImage} alt="" />
                <img src="" alt="" />
            </div>
            <div className='md:w-[50%] w-[90%] py-10'>
                <h2 className='text-2xl md:text-3xl font-extrabold mb-2'>Nasz radioteleskop</h2>
                <p className='text-md md:text-lg'>
                Radioteleskop to zaawansowane narzędzie umożliwiające odbiór fal radiowych emitowanych przez obiekty w kosmosie. Nasz projekt zakłada budowę prostego domowego radioteleskopu przy użyciu powszechnie dostępnych komponentów: anteny satelitarnej, konwertera, odbiornika, siłownika oraz mikrokontrolera Arduino.
                </p>
            </div>
        </div>
    </div>
  )
}

export default MainContentAbout