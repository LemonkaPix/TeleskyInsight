import { useState } from "react";
import DataPerson from "./DataPerson"; 

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto pb-20" id="team">
      <h1 className="text-3xl font-extrabold mb-5 w-[75%] lg:w-full mx-auto text-center xl:text-start">Nasz Zespół</h1>

      <div className="flex flex-wrap justify-center w-[90%] lg:w-full mx-auto">
        {DataPerson.map((item: any, index: any) => {
          return (
            <div key={index} className="p-2 w-[300px] h-[500px] lg:w-1/4">
              <div
                className="relative overflow-hidden cursor-pointer rounded-xl h-full"
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
                  style={{
                    transform: hoveredIndex === index ? "translateY(-100%)" : "translateY(0)",
                  }}
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
