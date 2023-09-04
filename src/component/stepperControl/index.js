import React from 'react'
import Button from '../Button'

function StepperControl({handleClick,steps,currentStep}){


  return (
   <>
     <div className='container flex justify-around mt-4 mb-8'>
        <Button onClick={()=>handleClick()} type='submit' className={`border-2 border-slate-200 ${currentStep ===1 && "opacity-50 "}`}>Back</Button>
        {currentStep !== steps.length &&
        <Button onClick={()=>handleClick("next")}  type='submit' className="bg-green-600 text-white">{currentStep === steps.length-1?"Confirm":"Next"}</Button>
        }
        </div>
   </>
  )
}

export default StepperControl;
