import { useRef, useState } from "react";
import useFixedContainer from "@/hooks/useFixedContainer";
import WizardSteps from "./WizardSteps";
import {  scroller } from "react-scroll";


const Hero = ({ heroTitle, heroDescription, heroImg, heroImgText, content }) => {
  const ref = useRef(null);
  const sticky = useFixedContainer(ref);

  const handleFixedWidget = () => {
    // hacemos scroll al form
    
    scroller.scrollTo(`form-section`, {
      duration: 1000,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className=" flex flex-col items-start">
      <section className=" bg-violet flex gap-10 items-center justify-center pt-20 pb-32">
        <div className="px-5 md:px-7 lg:px-24 flex flex-col md:grid md:grid-flow-col gap-20  text-justify">
          <article className="flex flex-col items-start justify-center gap-5">
            <h3 className="text-white font-bold">{heroTitle}</h3>
            <p className="text-xl text-white whitespace-pre-wrap font-medium leading-snug">
              {heroDescription}
            </p>
          </article>
          <div className="flex flex-col justify-center items-center gap-7">
            <img
              src={heroImg.data.attributes.url}
              alt={heroImg.data.attributes.name}
              width={500}
              height={300}
            />
            <a href="#" className="text-white underline">
              {heroImgText}
            </a>
          </div>
        </div>
      </section>
      
      <button
        ref={ref}
        onClick={handleFixedWidget}
        className="mx-5 md:mx-7 lg:mx-24 -mt-24 mb-5 border-2 rounded shadow-xl flex divide-x-2 divide-white border-white bg-black z-10 text-white  inline-block"
      >
        <div className="bg-black flex items-center gap-2 p-2">
        <span className="text-[#C7B4FF] font-bold">Start</span>
        <img src="/API_symbol-white.svg" alt="cog icon" width={20}/>
        <span className="text-white  font-bold">FACT WIZARD</span>

        </div>
        <div className="font-bold text-black bg-light-violet px-3 py-2">
            <span>NOW!</span>
        </div>
      </button>
      <WizardSteps
        content={content}
        step1={{
          title: content.wizardSteps1Title,
          description: content.wizardSteps1Description,
        }}
        step2={{
          title: content.wizardSteps2Title,
          description: content.wizardSteps2Description,
        }}
        step3={{
          title: content.wizardSteps3Title,
          description: content.wizardSteps3Description,
        }}
      />
    </div>
  );
};

export default Hero;
