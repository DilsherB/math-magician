import { useState } from "react";
import calculate from "../logic/calculate";

const Calculator = () => {
  const [state, setState] = useState({ next: null, operation: null, total: 0 });
  const btnClickHandler = (e) => {
    const value = e.target.textContent;
    const res = calculate(state, value);
    setState((prevState) => ({ ...prevState, ...res }));
  };
  const btns = () => {
    const calcBtns = [];
    // prettier-ignore
    const btnArr = ["AC", "+/-", "%", "÷", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", "0", ".", "="];
    btnArr.forEach((btn) => {
      return calcBtns.push(
        <button type="button" key={btn} id={btn} onClick={btnClickHandler}>
          {btn}
        </button>
      );
    });
    return calcBtns;
  };
  return (
    <div className="calculator">
      <div className="display">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <div className="btnsContainer">{btns()}</div>
    </div>
  );
};
export default Calculator;
