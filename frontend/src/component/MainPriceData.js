import React from 'react'
import PriceTable from './PriceTable'


const MainPriceData = (val) => {
  return (
    <>
      <PriceTable h1 = {val.h1} h4 = {val.h4} p1 = {val.p1} p2 = {val.p2} p3 = {val.p3} p4 = {val.p4}/>
    </>
  )
}

export default MainPriceData
