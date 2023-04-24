const StepsCounter = ({numberOfSteps, currentStep}) => {

    const steps = Array(numberOfSteps + 1).fill(0).map((v, i) => i + 1);
    // console.log(steps)
      return (
          <div className={`grid  gap-5 mb-4`} style={{gridTemplateColumns: `repeat(${numberOfSteps + 1},1fr)`}}>
             {steps?.map((step, index) => (
               <div className={`${currentStep + 1 >= step? 'bg-violet' : 'bg-light-violet' } h-3 rounded-xl`} key={index}></div>
             ))}
          </div>
      );
  }
  export default StepsCounter;