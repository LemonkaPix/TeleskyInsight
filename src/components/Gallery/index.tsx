// import IntroAbout from "./IntroAbout"
import Slider from "react-slick";
import DataGallery, { GalleryImage } from "./DataGallery";

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true, 
    // autoplay: false, 
    autoplaySpeed: 2000, 
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
    <div className="w-full bg-[#181414]">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto pb-20 pt-10" id="team">
        <h1 className="text-3xl font-extrabold mb-5 w-[75%] lg:w-full mx-auto text-center xl:text-start">Galeria</h1><br />

        <Slider {...settings}>
          {DataGallery.map((image: GalleryImage, index: number) => (
            <div key={index} className="px-10">
              <img src={image.image} className="rounded-xl mx-auto" style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </Slider> 
      </div>
    </div>
  )
}

export default Gallery