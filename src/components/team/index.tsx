import React, { useState } from "react";
import person1 from "../../assets/person1.png";
import DataPerson from "./DataPerson";

const Team = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto py-10">
      <h1 className="text-3xl font-extrabold mb-10 w-[75%] lg:w-full mx-auto text-center xl:text-start">Nasz Zespół</h1>

      <div className="flex flex-wrap justify-center w-[90%] lg:w-full mx-auto">
        {DataPerson.map((item, index) => {
          return (
            <div key={index} className="p-2 w-[300px]  h-[500px] lg:w-1/4">
              <div
                className="relative overflow-hidden cursor-pointer rounded-xl h-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={item.image}
                  className="w-full h-full object-cover rounded-[15px]"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-[#181414] text-white transition-transform duration-300 ease-out transform rounded-xl"
                  style={{
                    transform: isHovered ? "translateY(-100%)" : "translateY(0)",
                  }}
                >
                  <h3 className="text-lg font-bold text-center">
                    {item.fullName}
                  </h3>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 bg-[#181414] transition-transform duration-300 ease-out transform rounded-xl ${
                    isHovered ? "translate-y-[0px]" : "translate-y-full"
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
