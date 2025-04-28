import React, { useState } from "react";
import TypingEffect from "./TypingEffectProps";
import Photo from "../assets/IMG_1797.jpeg";

const Header: React.FC = () => {
  const [stateOfTypeEffects, setStateOfTypeEffects] = useState(0);
  const handleAddNextState = () => {
    setStateOfTypeEffects((prev) => prev + 1);
  };
  return (
    <div className="w-full h-[300px] flex flex-col justify-center gap-[5%] bg-gray-200 shadow-lg px-[2%] ">
      <div className="w-full h-[250px] flex items-center  gap-[5%]">
        <img
          src={Photo}
          alt="Me"
          className="w-[250px] h-[250px] rounded-full object-cover object-top "
        />
        <div className="w-auto h-[200px]  flex flex-col gap-[5%]">
          {stateOfTypeEffects >= 0 && (
            <TypingEffect
              text="Hello, I'm Giorgi Topuria !"
              Element="h1"
              AddNextState={handleAddNextState}
            />
          )}
          {stateOfTypeEffects > 0 && (
            <TypingEffect
              text="I'm Full-Stack Software Engineer"
              Element="p"
              AddNextState={handleAddNextState}
            />
          )}
        </div>
      </div>
      <div className="w-full h-[50px]  flex justify-center">
        {stateOfTypeEffects > 1 && (
          <TypingEffect
            text="Curriculum Vitae"
            Element="h1"
            AddNextState={handleAddNextState}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
