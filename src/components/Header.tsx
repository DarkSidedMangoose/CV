import React from "react";
import Photo from "../assets/IMG_1830.jpeg";
import Phone from "../assets/phone.png";
import Mail from "../assets/mail.png";
import Location from "../assets/location.png";


const PersonalInfo: React.FC<{
  handleAddNextState: () => void;
  stateOfTypeEffects: number;
}> = ({ handleAddNextState, stateOfTypeEffects }) => {
  return (
    <div className="w-full h-full flex  flex-col  bg-[#163853]   px-[2%] relative shadow-lg rounded-br-xl rounded-tr-xl ">
      <div className="w-full h-[300px] flex items-center   justify-center">
        <img
          src={Photo}
          alt="Me"
          className="w-[200px] h-[200px] rounded-full object-cover object-top border-4 border-white "
        />
      </div>
      <div className="w-full min-h-[170px] flex flex-col  ">
        <h1 className="text-white font-bold text-md w-full flex justify-center border-b-2 border-white py-2 font-serif">
          CONTACT
        </h1>
        <div className="w-full h-full  grid grid-rows-3 px-4 text-sm">
          <div className="w-full h-full  flex  items-center gap-[5%] ">
            <img src={Phone} alt="phone" />
            <p className="text-white font-semibold">(+995) 591-68-84-52</p>
          </div>
          <div className="w-full h-full  flex gap-[5%] items-center  ">
            <img src={Mail} alt="mail" />
            <p className="text-white font-semibold">Topuria2074@gmail.com</p>
          </div>
          <div className="w-full h-full  flex gap-[5%] items-center  ">
            <img src={Location} alt="location" />
            <p className="text-white font-semibold">Georgia,Tbilisi</p>
          </div>
        </div>
      </div>
      {/* <div className="w-full min-h-[200px] flex flex-col  ">
        <h1 className="text-white font-bold text-md w-full flex justify-center border-b-2 border-white py-2 font-serif">
          EDUCATION
        </h1>
        <div className="w-full h-full  grid grid-rows-2 px-4 text-sm">
          <div className="w-full h-full flex flex-col border-b-[1px] border-white">
            <div className="w-full h-full  flex  items-center gap-[5%] ">
              <img src={MortalBoard} alt="MortalBoard" />

              <p className="text-white font-semibold">
                Sokhumi State University
              </p>
            </div>
            <div className="w-full h-full  flex gap-[5%] items-center  ">
              <img src={Diploma} alt="MortalBoard" />

              <p className="text-white font-semibold">Economics</p>
            </div>
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-full  flex  items-center gap-[5%] ">
              <img src={MortalBoard} alt="MortalBoard" />

              <p className="text-white font-semibold">Gldani's College</p>
            </div>
            <div className="w-full h-full  flex gap-[5%] items-center  ">
              <img src={Diploma} alt="MortalBoard" />

              <p className="text-white font-semibold">IT Networking</p>
            </div>
          </div>
        </div>
      </div> */}
      
    </div>
  );
};

export default PersonalInfo;


{
  /* <div className="w-auto h-[200px]  flex flex-col gap-[5%]">
          {stateOfTypeEffects >= 0 && (
            <TypingEffect
              text="Hello, My Name Is Giorgi Topuria !"
              Element="h1"
              handleAddNextState={handleAddNextState}
            />
          )}
          {stateOfTypeEffects > 0 && (
            <TypingEffect
              text="I'm Full-Stack Software Engineer"
              Element="p"
              handleAddNextState={handleAddNextState}
            />
          )}
        </div> */
}

 {
   /* <div className="absolute bottom-0 w-full left-0 h-[50px]  flex justify-center">
        {stateOfTypeEffects > 1 && (
          <TypingEffect
            text="Curriculum Vitae"
            Element="h1"
            handleAddNextState={handleAddNextState}
          />
        )}
      </div> */
 }