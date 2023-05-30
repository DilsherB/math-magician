import React from "react";
import Child from "./child";

const Calculator = () => {
  return (
    <div className="display">
      <div className="result">0</div>
      <div className="calculator">
        <Child />
      </div>
    </div>
  );
};

export default Calculator;
