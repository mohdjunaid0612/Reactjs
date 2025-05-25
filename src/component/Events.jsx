import React from 'react'

const Events = () => {
const handleClick = ()=>{
    alert('this is click event');
}
const add = (a)=>{
alert(a+10);
}
  return (
    <div>
        <div className='flex align-items-end justify-content-start'>
            <div><p>Click Event </p><button onClick={handleClick}>Click Me</button></div>
            <div><p>If function have an arugment then it's call back at the time if call like </p>
            <button onClick={()=>add(100)}>Click to Add</button></div>
        </div>
    </div>
  )
}

export default Events
