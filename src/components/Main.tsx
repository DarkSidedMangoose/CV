import React, { useEffect, useState } from "react";
import TypingEffect from "./TypingEffectProps";

const Main: React.FC<{
  stateOfSidebar: number;
  handleAddNextState: () => void;
}> = ({ stateOfSidebar, handleAddNextState }) => {
    const [typingEffectState, setTypingEffectState] = useState<number>(0);
  

    const handleAddNextStates = () => {
      setTypingEffectState((prev) => prev + 1);
    }
  const [state, setState] = useState<boolean>(true)
  useEffect(() => {
    setState(false)
    setTypingEffectState(0)
    setTimeout(() => {
      setState(true)
    },100)
    console.log(stateOfSidebar)
  },[stateOfSidebar])
  return (
    <div className="w-full h-full flex flex-col items-center py-5 gap-[5%]    ">
      <div className="w-3/4 h-auto  flex flex-col  justify-center  font-serif relative py-5">
        <div className="w-full">
          <h1 className="custom-1350:text-[60px] text-[50px] font-thin ">
            GIORGI <span className="font-thin text-[#163853]">TOPURIA</span>
          </h1>
          <h3 className="text-[17px] text-[#163853] font-semibold">
            Full-Stack Software Engineer
          </h3>
          <div className="absolute left-0 bottom-0 w-[5%] min-w-[60px] bg-[#163853] h-[3%] rounded-sm"></div>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-1 grid-rows-1 px-[5%]   ">
        <div className="w-full h-full justify-center items-center flex flex-col gap-[5%]">
          <h1 className=" flex justify-center items-center text-[#163853]  font-bold text-xl font-serif ">
            {stateOfSidebar === 0
              ? "About Me"
              : stateOfSidebar === 1
              ? "Experience"
              : stateOfSidebar === 2
              ? "Education"
              : "Skills"}
          </h1>
          <div className="w-full h-full text-lg text-[#163853] font-semibold overflow-y-auto max-h-[450px] ">
            {stateOfSidebar === 0 && state ? (
              <TypingEffect
                text="Hello, My Name is Giorgi Topuria I was born on December 27, 2000. I'm  Full-Stack Software Engineer.I am Self Educated Person and i am in that field almost 7 years already
              I have a strong background in both front-end and back-end
              development, with expertise in technologies such as React, Asp.Net
              core 9(c#), and MongoDB. I am passionate about creating efficient
              and scalable web applications that provide a seamless user
              experience. I am always eager to learn new technologies and
              improve my skills to stay up-to-date with the latest trends in the
              software development industry. I am hard worker i have a great sense of responsibility and i trust planning and execution. I know that i have a lots of thing to learn to be best of the best in that field but i know effort and hard working will move the mountains. "
                Element={"p"}
                className="indent-[2rem]"
                handleAddNextState={handleAddNextState}
              />
            ) : stateOfSidebar === 1 && state ? (
              <>
                {/* <TypingEffect
                  text={`I am a self-driven developer with extensive project experience, including: I was building an e-commerce site for a clothing store (halted due to financial constraints) and a "Working Inspection" management system (canceled despite assurances of hiring). These projects showcase my ability to design and implement complex systems from scratch, such as secure authorization, Redis-based session management, role/task handling, user management, hierarchical workflows, interactive Georgian map integration, and action logging. I am eager to grow as a developer, learn new skills, and contribute meaningfully to a collaborative team.`}
                  Element={"p"}
                  className="indent-[2rem]"
                  handleAddNextState={handleAddNextState}
                /> */}
                {typingEffectState >= 0 && (
                  <>
                    <TypingEffect
                      text={`I am a self-driven developer with extensive project experience, including:`}
                      Element={"p"}
                      className="indent-[2rem]"
                      handleAddNextState={handleAddNextStates}
                    />
                  </>
                )}
                {typingEffectState >= 1 && (
                  <>
                    <h2>Clothe E-Commerce</h2>
                    <TypingEffect
                      text={`I was building an e-commerce site for a clothing store (halted due to financial constraints).`}
                      Element={"p"}
                      className="indent-[2rem]"
                      handleAddNextState={handleAddNextStates}
                    />
                  </>
                )}
                {typingEffectState >= 2 && (
                  <>
                    <h2>Goverment System</h2>
                    <TypingEffect
                      text={`"Working Inspection" management system (canceled despite assurances of hiring). These projects showcase my ability to design and implement complex systems from scratch, such as secure authorization, Redis-based session management, role/task handling, user management, hierarchical workflows, interactive Georgian map integration, and action logging. I am eager to grow as a developer, learn new skills, and contribute meaningfully to a collaborative team.`}
                      Element={"p"}
                      className="indent-[2rem]"
                      handleAddNextState={handleAddNextStates}
                    />
                  </>
                )}
              </>
            ) : stateOfSidebar === 2 && state ? (
              <>
                {/* <TypingEffect
                  text={`I studied at 181 Public School after that i  I enrolled in university and graduated a degree in Economics at Sokhumi State University. Additionally, I completed my studies at Gldani's College, specializing in IT Networking. I also studied at IT Step Academy for one year, focusing on cybersecurity, but had to leave due to high tuition costs. after that i go to the Military and I have done my duty to my country. in parallel almost 7 year i'm studying Software engineering using books, YouTube videos, and Udemy courses, I learned frontend languages (HTML, CSS, JavaScript). Subsequently, I expanded my knowledge by learning React.js, Redux, and frameworks such as Framer Motion (for animations). I then explored Next.js and later began studying Node.js, driven by a personal project to develop a Word generator application based on custom options that produced Word files. When presenting this project to the Working Inspection team, they asked if I could create a complete system. I explained my capabilities with my current stack, but they required ASP.NET Core for the backend. Motivated by this challenge, I started learning ASP.NET Core and acquired significant skills. Although the system I developed remains unfinished, it includes numerous functionalities and demonstrates my knowledge in that field.`}
                  Element={"p"}
                  className="indent-[2rem]"
                  handleAddNextState={handleAddNextState}
                /> */}
                {typingEffectState >= 0 && (
                  <>
                    <h2>School</h2>
                    <TypingEffect
                      text={`I studied at 181 Public School, and i gradated it succesfully.`}
                      Element={"p"}
                      className="indent-[2rem]"
                      handleAddNextState={handleAddNextStates}
                    />
                  </>
                )}
                {typingEffectState >= 1 && (
                  <>
                    <h2>University</h2>
                    <TypingEffect
                      text={`after that in 2017 I enrolled in university and graduated a degree in "Economics" at "Sokhumi State University", in 2022.`}
                      Element={"p"}
                      className="indent-[2rem]"
                      handleAddNextState={handleAddNextStates}
                    />
                  </>
                )}
                {typingEffectState >= 2 && (
                  <>
                    <h2>College</h2>
                    <TypingEffect
                      text={`In Parallel in 2019 i Was studying at "Gldani's College" and graduated a degree in "IT Networking".`}
                      Element={"p"}
                      className="indent-[2rem]"
                      handleAddNextState={handleAddNextStates}
                    />
                  </>
                )}
                {typingEffectState >= 3 && (
                  <>
                    <TypingEffect
                      text={`In Parallel in 2021 i Was studying at "IT step academy" faculty of "Cybersecurity" for 1 year but i had to leave it because of high tuition fees.`}
                      Element={"p"}
                      className="indent-[2rem]"
                      handleAddNextState={handleAddNextStates}
                    />
                  </>
                )}
                {typingEffectState >= 4 && (
                  <>
                    <h2>Military</h2>
                    <TypingEffect
                      text={`In 2023 i go to the Military and I have done my duty to my country.`}
                      Element={"p"}
                      className="indent-[2rem]"
                      handleAddNextState={handleAddNextStates}
                    />
                  </>
                )}
                {typingEffectState >= 5 && (
                  <>
                    <h2>Self-Study Of Programming</h2>
                    <TypingEffect
                      text={`In parallel almost 7 year i'm studying Software engineering using books, YouTube videos, and Udemy courses, I learned frontend languages (HTML, CSS, JavaScript). Subsequently, I expanded my knowledge by learning React.js, Redux, and frameworks such as Framer Motion (for animations). I then explored Next.js and later began studying Node.js, driven by a personal project to develop a Word generator application based on custom options that produced Word files. When presenting this project to the Working Inspection team, they asked if I could create a complete system. I explained my capabilities with my current stack, but they required ASP.NET Core for the backend. Motivated by this challenge, I started learning ASP.NET Core and acquired significant skills. Although the system I developed remains unfinished, it includes numerous functionalities and demonstrates my knowledge in that field.`}
                      Element={"p"}
                      className="indent-[2rem]"
                      handleAddNextState={handleAddNextStates}
                    />
                  </>
                )}
              </>
            ) : (
              stateOfSidebar === 3 &&
              state && (
                <>
                  {typingEffectState >= 0 && (
                    <>
                      <h2>Programming Skills</h2>
                      <TypingEffect
                        text={`In Software Engineering, I have a lot of knowledge which includes: React.js, Redux, Framer Motion, Next.js, Node.js, ASP.NET Core (C#), MongoDB, Express.js, HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, TypeScript, GitHub, Postman, Figma, MySQL, Redis, and JWT.`}
                        Element={"p"}
                        className="indent-[2rem]"
                        handleAddNextState={handleAddNextStates}
                      />
                    </>
                  )}
                  {typingEffectState >= 1 && (
                    <>
                      <h2>Speaking Languages</h2>

                      <TypingEffect
                        text={`As for Languages: English(B2), Russian(A2), Georgian(Native).`}
                        Element={"p"}
                        className="indent-[2rem]"
                        handleAddNextState={handleAddNextStates}
                      />
                    </>
                  )}
                  {typingEffectState >= 2 && (
                    <>
                      <h2>Other Skills</h2>
                      <TypingEffect
                        text={`Also i have Some knowledge in IT Field such as Networking, Cybersecurity, and Linux.`}
                        Element={"p"}
                        className="indent-[2rem]"
                        handleAddNextState={handleAddNextStates}
                      />
                    </>
                  )}
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
