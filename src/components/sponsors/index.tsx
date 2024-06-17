import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DataSponsors, { Sponsor } from "./DataSponsors";

const Sponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: false, 
    autoplay: true, 
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
    <div className="max-w-screen-xl mx-auto px-4 py-5">
      <Slider {...settings}>
        {DataSponsors.map((sponsor: Sponsor, index: number) => (
          <div key={index} className="px-10">
            <img src={sponsor.logoSponsor} alt={`Sponsor ${index + 1}`} className="rounded-xl mx-auto" style={{ width: '100%', height: 'auto' }} />
            <h2 className="text-center text-sm md:text-md mt-1">{sponsor.name}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sponsors;
