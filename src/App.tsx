import { Fragment } from "react/jsx-runtime";
import "./App.css";

import PersonalInfo from "./components/Header";
import { useCallback, useState } from "react";
import Main from "./components/Main";
import PersonalAdditionalInfo from "./components/PersonalAdditionalInfo";

function App() {
  const [stateOfSidebar, setStateOfSidebar] = useState<number>(0);
  const [stateOfTypeEffects, setStateOfTypeEffects] = useState(0);

  const handleAddNextState = () => {
    setStateOfTypeEffects((prev) => prev + 1);
  };
 
  const handleAddNextStateOfSidebar = useCallback((index: number) => {
    setStateOfSidebar(index);
    console.log(index)
  },[stateOfSidebar]);
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
      <PersonalAdditionalInfo sidebarState={handleAddNextStateOfSidebar} />
    </div>
  );
}

export default App;
