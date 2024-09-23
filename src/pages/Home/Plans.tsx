import React from 'react'
import { PlanCards } from './PlanCards'
import {data} from '../../Data.ts'
export const Plans = () => {

  console.log(data)
  return (
    <>
    {data.map((item, index) => {
      return <PlanCards key={index} {...item} />
    })}
    
    </>
  )
}
