import { Fragment } from "react/jsx-runtime";
import "./App.css";

import PersonalInfo from "./components/Header";
import { useState } from "react";
import Main from "./components/Main";
import PersonalAdditionalInfo from "./components/PersonalAdditionalInfo";

function App() {
  const [stateOfSidebar, setStateOfSidebar] = useState<number>(0);
  const [stateOfTypeEffects, setStateOfTypeEffects] = useState(0);

  const handleAddNextState = () => {
    setStateOfTypeEffects((prev) => prev + 1);
  };
  const SidebarDatas = [
    "General Info",
    "Experience",
    "Skills",
    " Projects",
    "Education",
  ];
  return (
    <div className="w-screen h-screen  grid grid-cols-[320px_1fr_320px]    gap-[2%] bg-white ">
      <PersonalInfo
        handleAddNextState={handleAddNextState}
        stateOfTypeEffects={stateOfTypeEffects}
      />

      <Main
        stateOfSidebar={stateOfSidebar}
        handleAddNextState={handleAddNextState}
      />
      <PersonalAdditionalInfo />
    </div>
  );
}

export default App;
