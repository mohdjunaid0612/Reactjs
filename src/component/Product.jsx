import React from 'react'

const Product = (proObj) => {
  return (
    <div className="product">
      <h2>{proObj.title}</h2>
      <h3>{proObj.brand}</h3>
      <h4>{proObj.price}</h4>
    </div>
  )
}

export default Product
