import React from 'react'

const PersonalAdditionalInfo:React.FC = () => {

  const PersonalAdditionalInfoData = ["General Info", "Experience", "Education", "Skills"];

  return (
    <div className="w-full h-full bg-[#163853] rounded-tl-xl rounded-bl-xl flex  text-white text-2xl justify-center items-center">
      <div className="w-full h-1/2 flex flex-col font-semibold">
        {PersonalAdditionalInfoData.map((item, index) => (

        <button className="w-full h-1/4 shadow-lg hover:opacity-60">
          {item}
        </button>
        ))}
      </div>
    </div>
  );
}

export default PersonalAdditionalInfo
