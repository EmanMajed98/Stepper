import React, { useEffect, useRef, useState } from 'react'

function Stepper({steps,currentStep}) {
     const [newStep,setNewStep]=useState([]);
     const stepRef = useRef();
     const updateStep = (stepNumber,steps) =>{

     const newSteps=[...steps];
            let count =0 ;
          while(count< newSteps.length){
            if(count === stepNumber){
                newSteps[count]={
                    ...newSteps[count],
                    highlighted:true,
                    selected:true,
                    completed:true,
              };
              count++;
            }
            else if(count < stepNumber){
                newSteps[count]={
                    ...newSteps[count],
                    highlighted:false,
                    selected:true,
                    completed:true,
              };
              count++;

            }else{
                newSteps[count]={
                    ...newSteps[count],
                    highlighted:false,
                    selected:false,
                    completed:false,
              };
              count++;

            }
          }
          return newSteps;
     }

     useEffect(()=>{
        const stepsState = steps.map((step,index)=> Object.assign({},{
            description : step,
            completed:false ,
            highlighted : index === 0 ?true : false,
            selected: index === 0 ?true : false,
    })
    );
    stepRef.current=stepsState;
    const current =  updateStep(currentStep -1, stepRef.current);
    setNewStep(current);
     },[steps,currentStep])

  return (
     <div className='mx-10 p-4 flex justify-between items-center'>

        {newStep.map((step,index)=>{
        return(
        <div className={index !== newStep.length -1 ?'w-full flex items-center' : "flex items-center"} key={index} >

        <div className='relative flex flex-clo items-center text-teal-600'> 

            <div className={`w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center py-
              transition duration-500 ease-in-out ${step.selected && "bg-green-600 text-white font-bold border border-green-600"}`}>
                   {step.completed ?(
                    <span className='text-white font-bold text-xl'>&#10003;</span>
                ):(index +1)}
            </div>

            <div className={`w-32 mt-16  text-sm uppercase absolute top-0 -ml-4 ${step.highlighted? "text-gray-900" : "text-gray-400" }`}>
               {step.description}
            </div>
        </div>
        
        <div className={`flex-auto  border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-green-600" : "border-gray-300"}`}>

        </div>
        
        </div>
        )


     })
}

     </div>

     
  )
}

export default Stepper;
