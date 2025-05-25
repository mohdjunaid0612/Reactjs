import React from 'react'
import Product from './component/Product'
import './App.css'
import Events from './component/Events'
import Counter from './component/Counter'

const App = () => {
  return (
    <div>
      <h2>Props</h2>
      <div className="flex">
        <Product title="Nord 3" brand="OnePlus" price="32,000"/>
        <Product title="Nord CE 3" brand="OnePlus" price="22,000"/>
        <Product title="Rezer CE 4" brand="OnePlus" price="54,000"/>
      </div>
      <h2>Events</h2>
      <Events/>
      <h2>useState</h2>
      <Counter/>
    </div>
  )
}

export default App
