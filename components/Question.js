const Question = ({
  questionTitle,
  Options,
  onChange,
  questionName,
  formState,
}) => {
  return (
    <>
      <article className="border-8 rounded-md border-light-violet pb-10 ">
        <div>
          <h4 className=" font-semibold text-white bg-violet px-2 lg:px-7 py-5">
            {questionTitle}
          </h4>
        </div>
        <h4 className="px-2 lg:px-7 my-7 font-bold italic">I agree with:</h4>
        <ul className="px-2 lg:px-7 grid gap-10">
          {Options?.map((opt, index) => (
            <div className="grid gap-1" key={index}>
              <li className="flex gap-1 md:gap-3 lg:gap-5 items-start" key={index}>
                <input
                  type="radio"
                  className="mt-3"
                  // id="q1-option1"
                  name={questionName}
                  checked={formState[questionName] === index + 1}
                  onChange={() => onChange(questionName, index + 1, opt.image)}
                />
                <label className="grid gap-5">
                  <div className="flex gap-3 items-center">
                    <img
                      className="option-icon-"
                      src={opt?.image.data.attributes.url}
                      alt={opt?.image.data.attributes.name}
                      width={47}
                    />
                    <h4 className="font-bold">{opt?.questionText}</h4>
                  </div>
                  <p className="">{opt?.questionDescription}</p>
                </label>
              </li>
            </div>
          ))}
        </ul>
      </article>
    </>
  );
};
export default Question;
