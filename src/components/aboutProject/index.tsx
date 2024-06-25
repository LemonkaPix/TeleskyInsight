import aboutProject from "../../assets/aboutProject.jpg"; 
import aboutProject2 from "../../assets/aboutProject2.jpg"; 

const AboutSection = () => {
  return (
    <div className='bg-[#283593] w-full mb-[100px] overflow-hidden' id="project">
      <div className='max-w-screen-xl mx-auto flex md:flex-row flex-col justify-between items-center px-5 pb-20 pt-0'>
        <div className='md:w-[50%] w-full pb-10'>
          <h2 className='text-2xl md:text-3xl font-extrabold mb-4 text-white mt-10 md:mt-[80px]'>O projekcie</h2>
          <p className='text-sm xl:text-md lg:text-lg text-white'>
          Nasz radioteleskop zbudowaliśmy w ramach projektu EduMars. Spotkania organizujemy w Podkarpackim Centrum Innowacji w Rzeszowie, gdzie uczestnicy są podzieleni na dwie grupy. Jedna z nich pracuje nad budową ekranoplanu, a druga, do której należymy, zajmuje się budową radioteleskopu. Podczas spotkań nie tylko omawiamy szczegóły naszych zadań, ale także prezentujemy swoje mini projekty i słuchamy interesujących prezentacji na temat branży kosmicznej.
          </p>
        </div>
        <div className='md:w-[40%] w-full relative flex flex-col sm:flex-row  justify-center items-center sm:items-start md:items-center mt-[50px] md:mt-0'>
          <img src={aboutProject} alt="First Satellite" className='w-[325px] sm:w-[260px] max-w-full rounded-md shadow-lg md:absolute z-10 -translate-y-2 md:translate-y-0 md:translate-x-[-25px]' />
          <img src={aboutProject2} alt="Second Satellite" className='w-[325px] sm:w-[260px] max-w-full rounded-md shadow-lg md:absolute z-0 sm:translate-x-10 md:translate-x-20 translate-y-4 md:translate-y-[115px]' />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
