import React, { useEffect, useState } from "react";

const EffectUse = () => {
  const [count, setCount] = useState(1);
  const increaseVal = () => {
    if (count < 15) {
      setCount(count + 1);
    }
  };

  const decreaseVal = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    document.title = count;
  });
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={increaseVal}>Increse</button>&nbsp;
      <button onClick={decreaseVal}>Decrese</button>
    </div>
  );
};

export default EffectUse;
