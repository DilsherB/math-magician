import renderer from "react-test-renderer";
import React from "react";
import Home from "../components/Home";

const renderTree = (tree) => renderer.create(tree);
describe("<Home>", () => {
  it("should render component", () => {
    expect(renderTree(<Home />).toJSON()).toMatchSnapshot();
  });
});
