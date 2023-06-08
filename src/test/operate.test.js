import Big from "big.js";
import operate from "../logic/operate";

jest.mock("big.js", () => {
  const mockBig = jest.fn();
  mockBig.prototype.toString = jest.fn();
  return mockBig;
});

describe("operate", () => {
  it("should expose a function", () => {
    expect(operate).toBeDefined();
  });

  it("should return the expected output", () => {
    const numberOne = "2";
    const numberTwo = "3";
    const operation = "+";
    const expectedOutput = "5";

    Big.prototype.toString.mockReturnValueOnce(expectedOutput);

    expect(operate(numberOne, numberTwo, operation)).toEqual(expectedOutput);
  });
});
