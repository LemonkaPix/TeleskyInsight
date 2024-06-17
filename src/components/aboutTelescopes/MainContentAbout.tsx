import radioteleScopeImage from "../../assets/radiotelescopeImage.jpg"

const MainContentAbout = () => {
  return (
    <div className='bg-[#283593] w-full'>
        <div className='max-w-screen-xl mx-auto flex md:flex-row flex-col justify-between items-center p-5'>
            <div className='md:w-[40%] w-[90%] py-10'>
                <img src={radioteleScopeImage} alt="" />
                <img src="" alt="" />
            </div>
            <div className='md:w-[50%] w-[90%] py-10'>
                <h2 className='text-2xl md:text-3xl font-extrabold mb-2'>Radioteleskoy</h2>
                <p className='text-md md:text-lg'>Sentencja to krótka, przeważnie jednozdaniowa, błyskotliwa wypowiedź wyrażająca ogólną myśl o charakterze filozoficznym lub moralnym. 
                    Przykłady użycia: Najpiękniejsze sentencje zapisuję w zeszycie. Dokument opatrzyłem dosyć ironiczną sentencją. 
                    Sentencja to krótka, przeważnie jednozdaniowa, błyskotliwa wypowiedź wyrażająca ogólną myśl o charakterze filozoficznym lub moralnym. 
                    Przykłady użycia: Najpiękniejsze sentencje zapisuję w zeszycie. Dokument opatrzyłem dosyć ironiczną sentencją</p>
            </div>
        </div>
    </div>
  )
}

export default MainContentAbout