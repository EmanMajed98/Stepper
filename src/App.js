import React, { useState } from 'react';
import './App.css';
import Stepper from './component/stepper';
import StepperControl from './component/stepperControl';
import Details from './component/steps/details';
import Final from './component/steps/final';
import Account from './component/steps/account';
import { StepperContext} from "./component"
import Payment from './component/steps/payment';

function App() {
  
  const[currentStep,setCurrentStep]=useState(1)

  const steps = [
    "Account Information",
    "Personal Details",
    "Payment",
    "Complete"
  ];

  const displaySteps = (steps) =>{
    switch (steps){
      case 1:
        return <Account/>
      case 2:
        return <Details/>
      case 3:
      return <Payment/>
      case 4:
        return <Final/>
        default:
    }
  }

function handleClick(direction){
   let  newStep =currentStep ;
direction === "next" ? newStep++ : newStep--;
newStep > 0 && newStep <= steps.length && setCurrentStep(newStep) ;
}


  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl bg-white pb-1">

      <div className='container horizontal mt-5'>
        <Stepper
          steps={steps}
          currentStep={currentStep}
        />
      <div className='my-10 p-10'>
       <StepperContext.Provider value={{}}>
           {displaySteps(currentStep)}
       </StepperContext.Provider>

       </div>
      </div>
    
      <StepperControl
      handleClick={handleClick}
      steps= {steps}
      currentStep={currentStep}
      />
     

    </div>
  );
}

export default App;
