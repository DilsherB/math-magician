import renderer from "react-test-renderer";
import Calculator from "../components/Calculator";

jest.mock("../logic/calculate");

const renderTree = (tree) => renderer.create(tree);
describe("<Calculator>", () => {
  it("should render component", () => {
    expect(renderTree(<Calculator />).toJSON()).toMatchSnapshot();
  });
});
