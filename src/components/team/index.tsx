import { useState } from "react";
import DataPerson from "./DataPerson"; 
import Slider from "react-slick";
import DataGallery, { GalleryImage } from "./DataGallery";


const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true, 
    // autoplay: false, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 724,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto pb-20" id="team">
    
    <div>
      <h1 className="text-3xl font-extrabold mb-5 w-[75%] lg:w-full mx-auto text-center xl:text-start">Galeria</h1><br />

        <Slider {...settings}>
          {DataGallery.map((image: GalleryImage, index: number) => (
            <div key={index} className="px-10">
              <img src={image.image} className="rounded-xl mx-auto" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </Slider><br /><br />      
    </div>


      <h1 className="text-3xl font-extrabold mb-5 w-[75%] lg:w-full mx-auto text-center xl:text-start">Nasz Zespół</h1>

      <div className="flex flex-wrap justify-center w-[90%] lg:w-full mx-auto">
        {DataPerson.map((item: any, index: any) => {
          return (
            <div key={index} className="p-2 w-[300px] h-[400px] lg:h-[500px] lg:w-1/4 mb-[30px] md:mb-0">
              <div
                className="relative overflow-hidden cursor-pointer rounded-xl h-[400px] md:h-full"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.image}
                  alt={item.fullName} 
                  className="w-full h-full object-cover rounded-[15px]"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-[#181414] text-white transition-transform duration-300 ease-out transform rounded-xl"
                  // style={{
                  //   transform: hoveredIndex === index ? "translateY(-100%)" : "translateY(0)",
                  // }}
                >
                  <h3 className="text-lg font-bold text-center">
                    {item.fullName}
                  </h3>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 bg-[#181414] transition-transform duration-300 ease-out transform rounded-xl ${
                    hoveredIndex === index ? "translate-y-[0px]" : "translate-y-full"
                  }`}
                >
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
