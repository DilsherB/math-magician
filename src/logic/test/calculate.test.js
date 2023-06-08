/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import operate from "./operate";
import calculate from "./calculate";

jest.mock("./operate");

describe("calculate", () => {
  it("should expose a function", () => {
    expect(calculate).toBeDefined();
  });

  it("calculate should return expected output", () => {
    // const retValue = calculate(obj,buttonName);
    expect(false).toBeTruthy();
  });
});
