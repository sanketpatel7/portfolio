import React from 'react'
import MainPriceData from './MainPriceData'
import PriceData from './PriceData'

const Price = () => {
  return (
    <>
      {/* <MainPriceData /> */}
      
      {PriceData.map(MainPriceData)}
    </>
  )
}

export default Price
