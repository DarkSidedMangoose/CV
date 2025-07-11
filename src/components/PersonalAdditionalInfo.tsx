import React, { useCallback } from 'react'
import User from "../assets/user.png";
import Experience from "../assets/Experience.png";
import Education from "../assets/Education.png";
import Skill from "../assets/skill.png";

const PersonalAdditionalInfo: React.FC<{
  sidebarState: (arg: number) => void;
}> = ({ sidebarState }) => {
  const PersonalAdditionalInfoData = [
    "About Me",
    "Experience",
    "Education",
    "Skills",
  ];

  const sidebarStateChange = useCallback(
    (index: number) => {
      sidebarState(index);
    },
    [sidebarState]
  );
  return (
    <div className="w-full h-auto bg-[#163853] rounded-tl-xl items-center rounded-bl-xl flex  text-white text-2xl justify-center py-5">
      <div className="w-full h-auto bg-[#163853] flex flex-col font-semibold">
        {PersonalAdditionalInfoData.map((item, index) => (
          <div
            className="w-full min-h-[100px] shadow-lg hover:opacity-60 flex cursor-pointer"
            onClick={() => sidebarStateChange(index)}
            key={index}
          >
            <img src={index === 0 ? User : index === 1 ? Experience : index === 2 ? Education : Skill} alt="user" className="w-[40px] h-[40px] " />
            <button>{item}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalAdditionalInfo
