import React from 'react'
import Button from '../Button'

function Final() {
  return (
    <div className='flex flex-col items-center mt-12'>
      <span className='w-24 h-24 bg-green-500 text-white text-[60px] rounded-full flex items-center justify-center mb-10'>&#10003;</span>
       <span className='text-green-500 uppercase'>Congratulations</span>
       <span>Your Account has been create</span>
       <Button className="bg-green-600 text-white p-2 rounded-lg mt-6">close</Button>
    </div>
  )
}

export default Final
