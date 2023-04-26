const WizardSteps = ({ content }) => {
  return (
    <section className="bg-extralight-violet py-20 px-5 md:px-7 lg:px-24 ">
      <div className="">
        <h3 className="font-bold mb-14">{content.wizardStepsTitle}</h3>
        <article className="grid lg:grid-cols-3 gap-20">
          <div className="grid steps-rows items-start ">
            <h3 className="font-bold text-[#56B2A3]">{content.wizardSteps1Title}</h3>
            <h5 className="tracking-tight font-medium">
            {content.wizardSteps1Description}
            </h5>
          </div>
          <div className="grid steps-rows items-start ">
            <h3 className="font-bold text-[#37ADFF]">{content.wizardSteps2Title}</h3>
            <h5 className="tracking-tight font-medium">
            {content.wizardSteps2Description}
            </h5>
          </div>
          <div className="grid steps-rows items-start ">
            <h3 className="font-bold text-[#7648FE]">{content.wizardSteps3Title}</h3>
            <h5 className="tracking-tight font-medium">
              {content.wizardSteps3Description}
            </h5>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WizardSteps;
