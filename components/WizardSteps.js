const WizardSteps = ({ wizardStepsTitle }) => {
  return (
    <section className="bg-extralight-violet py-20">
      <div className="container mx-auto">
        <h3 className="font-bold mb-10">{wizardStepsTitle}</h3>
        <article className="grid md:grid-cols-3 gap-20">
          <div className="flex flex-col items-start gap-10">
            <h2 className="font-bold text-[#56B2A3]">Consent to the 2 standard conditions</h2>
            <h5 className="tracking-tight font-medium">
              of the licence (fair use policy and loyal change policy) that form
              the foundation of a reliable agreement between an API Core
              Provider and API User.
            </h5>
          </div>
          <div className="flex flex-col items-start gap-10">
            <h2 className="font-bold text-[#37ADFF]">Select different options</h2>
            <h5 className="tracking-tight font-medium">
              for five conditions (API access, API specifications, Ethical data
              policy, Loyal output policy, and Reference and attribution).
            </h5>
          </div>
          <div className="flex flex-col items-start gap-10">
            <h2 className="font-bold text-[#7648FE]">Receive a License Appendix</h2>
            <h5 className="tracking-tight font-medium">
              which allows you to further list specific documents relevant to
              your API (including Commercial API specifications, API contractual
              commitments, Trademark policy, and Open data contract).
            </h5>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WizardSteps;
