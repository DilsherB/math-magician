import React from "react";

const Child = () => {
  // prettier-ignore
  const btnArr = ["AC", "+/-", "%", "÷", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", "0", ".", "="];
  const calcBtns = [];
  btnArr.forEach((btn) => {
    return calcBtns.push(
      <button type="button" key={btn} id={btn}>
        {btn}
      </button>
    );
  });
  return <div>{calcBtns}</div>;
};

export default Child;
