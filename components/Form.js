import { useEffect, useRef, useState } from "react";
import Question from "./Question.js";
import StepsCounter from "./StepsCounter";
import useMoveToRevalidate from "@/hooks/useMoveToRevalidate.js";

import { Element, scroller } from "react-scroll";

const Form = ({ content, questions, handleImagesChange, createDocument }) => {
  // console.log('data', questions)
  const fixedRef = useRef()
  
  const [defaultConditionsAgreed, setDefaultConditionsAgreed] = useState(false);
  const moveToInvalidatedField = useMoveToRevalidate();

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

  const handleNextQuestion = (questionName) => {
    // hacemos scroll a la siguiente pregunta
    
    scroller.scrollTo(`question-${Number(questionName) + 1}`, {
      duration: 1000,
      // delay: 200,
      smooth: "easeInOutQuart",
      offset: -10,
    });
  };

  const ValidateConditions = () => {
    // if(defaultConditionsAgreed === false) moveToInvalidatedField('defaultConditionsQuestion')
    if (defaultConditionsAgreed === false) {
      scroller.scrollTo("question-0", {
        duration: 1000,
        // delay: 200,
        smooth: "easeInOutQuart",
        offset: -40,
      });
    }
    if (defaultConditionsAgreed === true) return true;
  };

  const handleOptionChange = (questionName, value, image) => {
    setOptions({
      ...options,
      [questionName]: value,
    });
    handleImagesChange(image, questionName);

    handleNextQuestion(questionName);
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
    <Element id="form-section" name="form-section">
      <section className="relative bg-white px-5 md:px-7 lg:px-24 z-20">
      <div className="flex items-center justify-start gap-3 py-14 md:py-24">
        <img src="/API_symbol.svg" alt="" />
        <h1 className="font-bold ">{content.factWizardTitle}</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 items-center"
      >
        <div className="grid gap-20">
          <Element name="question-0">
            <article className="">
              <StepsCounter numberOfSteps={questions.length} currentStep={0} />
              <div
              ref={fixedRef}
                id="question-0"
                className="flex flex-col lg:flex-row rounded-t gap-5 bg-light-violet p-5"
              >
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
                <div className="grid gap-7 bg-white p-5 rounded">
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
              <div className="grid gap-7 justify-items-center rounded-b bg-violet px-10 py-10">
                <h4 className=" font-semibold text-white text-center">
                  {content.defaultConditionAgreeText}
                </h4>
                <label className="text-white text-3xl flex gap-5 items-center">
                  {!defaultConditionsAgreed ? (
                    <span className="text-red-400 text-xl">*</span>
                  ) : null}
                  <input
                    type="checkbox"
                    onChange={() => {
                      setDefaultConditionsAgreed((prev) => !prev)
                      handleNextQuestion('0')
                    }
                  }
                  />
                  Yes
                </label>
              </div>
            </article>
          </Element>

          {questions?.map((question, index, array) => (
            <Element key={index} name={`question-${index + 1}`}>
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
            </Element>
          ))}
        </div>
        <Element name={`question-${questions.length + 1}`}>
          <button
            type="submit"
            className="py-2 px-20 bg-violet text-white shadow-md font-medium rounded mt-10 mb-20"
            onClick={() => createDocument(ValidateConditions)}
            // disabled={!defaultConditionsAgreed? true: false}
          >
            Create API Terms of Services
          </button>
        </Element>
      </form>
    </section>
    </Element>
  );
};

export default Form;
