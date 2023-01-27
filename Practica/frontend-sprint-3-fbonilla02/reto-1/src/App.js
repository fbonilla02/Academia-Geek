import React from "react";
import FirstComponent from "./Components/FirstComponent";
import FourComponent from "./Components/FourComponent";
import SecondComponent from "./Components/SecontComponent";
import ThirtComponent from "./Components/ThirtComponent";
import { BsTwitter, BsVimeo, BsLinkedin } from "react-icons/bs";

function App() {
  return (
    <div className='bg-amarillito grid gap-2 grid-cols-[80%_15%] md:grid-cols-[1fr_50px]'>
      <div className="">
        <FirstComponent/>
        <SecondComponent/>
        <ThirtComponent/>
        <FourComponent/>
      </div>
      <div className="fixed grid right-5 top-20  gap-5 justify-items-center ">
       <BsTwitter/>
       <BsVimeo/>
       <BsLinkedin/>
      </div>

    </div>
  );
}

export default App;
