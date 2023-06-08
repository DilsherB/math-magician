import Big from "big.js";
import operate from "../logic/operate";

describe("operate", () => {
  it("sum of two values", () => {
    const retValue = operate(1, 2, "+");
    expect(retValue).toBe("3");
  });
  it("subtraction of two numbers", () => {
    const retValue = operate(1, 2, "-");
    expect(retValue).toBe("-1");
  });
  it("multiplication for two numbers", () => {
    const retValue = operate(5, 2, "x");
    expect(retValue).toBe("10");
  });
  it("division test", () => {
    const retValue = operate(5, 2, "÷");
    expect(retValue).toBe("2.5");
  });
  it("modulus test", () => {
    const retValue = operate(9, 2, "%");
    expect(retValue).toBe("1");
  });
  it("division by zero test", () => {
    const retValue = operate(9, 0, "÷");
    expect(retValue).toBe("Can't divide by 0.");
  });
});
