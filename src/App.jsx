import React from 'react'
import Product from './component/Product'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="flex">
        <Product title="Nord 3" brand="OnePlus" price="32,000"/>
        <Product title="Nord CE 3" brand="OnePlus" price="22,000"/>
        <Product title="Rezer CE 4" brand="OnePlus" price="54,000"/>
        <Product title="Nord Lite CE 4" brand="OnePlus" price="24,000"/>
        <Product title="Nord Lite RE" brand="OnePlus" price="34,000"/>
        <Product title="Nord Lite CE 2" brand="OnePlus" price="27,000"/>
      </div>
      
    </div>
  )
}

export default App
