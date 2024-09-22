import React from 'react'

export const GetStarted = () => {
  return (
    <div className='w-4/5 h-96 border border-indigo-600 flex flex-col items-center gap-6'>
        <h1 className='text-4xl text-center font-bold'>A simple solution to complex tasks is coming soon</h1>
        <p className='leading-7 text-center'>
          Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.    
        </p>
        <button className='h-14 w-44 rounded-3xl bg-blue-600 text-white'>Get Started</button>
    </div>
  )
}
