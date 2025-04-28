import { Fragment } from "react/jsx-runtime";
import "./App.css";

import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [stateOfSidebar, setStateOfSidebar] = useState(0);
  const SidebarDatas = [
    "General Info",
    "Experience",
    "Skills",
    " Projects",
    "Education",
  ];
  return (
    <div className="w-screen h-screen flex flex-col  items-center bg-gray-100">
      <Header />
      <main className="w-full h-full flex items-center  gap-[5%]">
        <aside className="absolute min-w-[250px] w-[15%] h-1/2 bg-gray-200 shadow-lg flex flex-col items-center justify-center gap-[5%] shadow-xl rounded-tr-[50px] rounded-br-[50px]">
          {SidebarDatas.map((data, index) => (
            <Fragment key={index}>
              <h1
                onClick={() => setStateOfSidebar(index)}
                style={{ height: `calc(100% / ${SidebarDatas.length})` }}
                className={`text-2xl w-full ${
                  index === 0
                    ? "rounded-tr-[50px]"
                    : index === SidebarDatas.length - 1 && "rounded-br-[50px]"
                }  font-bold text-gray-800 font-serif cursor-pointer hover:bg-gray-300 flex items-center justify-center rounded-lg transition-all duration-300 ease-in-out ${
                  stateOfSidebar === index && "bg-gray-300"
                }`}
              >
                {data}
              </h1>
            </Fragment>
          ))}
        </aside>
        <div className="w-full p-[5%] h-full bg-black"></div>
      </main>
    </div>
  );
}

export default App;
