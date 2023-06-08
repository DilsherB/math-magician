import calculate from "../logic/calculate";
import operate from "../logic/operate";

jest.mock("../logic/operate");

describe("calculate", () => {
  it("should expose a function", () => {
    expect(calculate).toBeDefined();
  });

  it("should return the expected output", () => {
    const obj = {
      total: "2",
      next: "3",
      operation: "+",
    };
    const buttonName = "=";
    const expectedOutput = {
      total: "5",
      next: null,
      operation: null,
    };
    operate.mockReturnValue("5");
    expect(calculate(obj, buttonName)).toEqual(expectedOutput);
  });
});
