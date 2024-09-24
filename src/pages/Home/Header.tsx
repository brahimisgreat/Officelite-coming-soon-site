import React from 'react'
import './Header.scss'
import rings from '../../assets/home/bg-pattern-header.svg'
import logo from '../../assets/shared/logo.svg'
import chart from '../../assets/home/illustration-charts.svg'

export const Header = () => {
  return (
    <div className='header text-4xl relative flex flex-col justify-center items-center gap-16 '>
      <img src={rings} className='absolute h-full w-screen bottom-32'/>
      <img src={logo} className=''/>
      <div className=''>
      <img src={chart} className='w-44 h-48'/>
      </div>
    </div>
  )
}
