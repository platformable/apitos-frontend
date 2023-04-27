import { useRef, useState } from "react";
import useFixedContainer from "@/hooks/useFixedContainer";
import WizardSteps from "./WizardSteps";

const Hero = ({ heroTitle, heroDescription, heroImg, heroImgText, content }) => {
  // const ref = useRef(null);
  // const Sticky = useFixedContainer(ref);
  return (
    <div className=" flex flex-col items-start">
      <section className=" bg-violet flex gap-10 items-center justify-center py-20">
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
      <div className="px-5 md:px-7 lg:px-24 sticky top-0  h-0">
      <div className="">
      <div
        // ref={ref}
        className="bg-black text-white p-3 inline-block"
      >
        Stickiy button
      </div>
      </div>
      </div>
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
