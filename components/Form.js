import { useState } from "react";
import Question from "./Question.js";
import StepsCounter from "./StepsCounter";
import useMoveToRevalidate from "@/hooks/useMoveToRevalidate.js";

const Form = ({ content, questions, handleImagesChange, createDocument }) => {
  // console.log('data', questions)
  const [defaultConditionsAgreed, setDefaultConditionsAgreed] = useState(false)

  const [options, setOptions] = useState(
    questions?.reduce(
      (acc, curr, currIndex) => ({
        ...acc,
        [currIndex + 1]:
          curr.Options.findIndex((option, index) => option.isDefault) + 1,
      }),
      {}
    )
  );
  const ValidateConditions = () => {
    if(defaultConditionsAgreed === false) useMoveToRevalidate('defaultConditionsQuestion')
    if (defaultConditionsAgreed === true) return true
  }

  const handleOptionChange = (questionName, value, image) => {
    setOptions({
      ...options,
      [questionName]: value,
    });

    handleImagesChange(image, questionName);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can determine the possible combination of options here
    let optionName = Object.entries(options).reduce(
      (acc, curr) => (acc += `_${curr[0]}${curr[1]}`),
      "options"
    );
  };
  // console.log('options',options);

  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-center gap-3 py-24">
        <img src="/API_symbol.svg" alt="" />
        <h1 className="font-bold">{content.factWizardTitle}</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 items-center"
      >
        <div className="grid gap-20">
          <article className="rounded-md">
            <StepsCounter
              numberOfSteps={questions.length}
              currentStep={0}
            />
            <div id='defaultConditionsQuestion' className="flex flex-col md:flex-row gap-10 bg-light-violet p-5">
              <div className="grid gap-7 bg-white rounded p-5">
                <div className="flex gap-5">
                  <img src="" alt="" />
                  <h4 className="font-bold ">
                    {content.defaultConditionUsePolicyTitle}
                  </h4>
                </div>
                <p className="">
                  {content.defaultConditionUsePolicyDescription}
                </p>
              </div>
              <div className="grid gap-7 bg-white p-5">
                <div className="flex gap-5">
                  <img src="" alt="" />
                  <h4 className="font-bold ">
                    {content.defaultConditionChangePolicyTitle}
                  </h4>
                </div>
                <p className="">
                  {content.defaultConditionChangePolicyDescription}
                </p>
              </div>
            </div>
            <div className="grid gap-7 justify-items-center bg-violet px-10 py-10">
              <h4 className=" font-semibold text-white text-center">
                {content.defaultConditionAgreeText}
              </h4>
              <label className="text-white text-3xl flex gap-5 items-center">
              {!defaultConditionsAgreed ? (<span className="text-red-400 text-xl">*</span>): null}

                <input type="checkbox" onChange={() => setDefaultConditionsAgreed(prev => !prev)}/>
                Yes

              </label>
            </div>
          </article>
          {questions?.map((question, index, array) => (
            <section key={index}>
              <StepsCounter
                numberOfSteps={array.length}
                currentStep={index + 1}
              />
              <Question
                {...question}
                questionName={index + 1}
                onChange={handleOptionChange}
                formState={options}
                key={index}
              />
            </section>
          ))}
        </div>

        <button
          type="submit"
          className="py-2 px-10 bg-violet text-white shadow font-medium rounded mt-10 mb-20"
          onClick={() => createDocument(ValidateConditions)}
          // disabled={!defaultConditionsAgreed? true: false}
        >
          Create API Terms of Services
        </button>
      </form>
    </section>
  );
};

export default Form;
