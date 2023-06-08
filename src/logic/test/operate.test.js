import Big from "big.js";
import operate from "./operate";

jest.mock("big.js");

describe("operate", () => {
  it("should expose a function", () => {
    expect(operate).toBeDefined();
  });

  it("operate should return expected output", () => {
    // const retValue = operate(numberOne,numberTwo,operation);
    expect(false).toBeTruthy();
  });
});
