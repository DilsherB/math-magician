import renderer from "react-test-renderer";
import React, { useEffect, useState } from "react";
import Quote from "../../components/Quote";

const renderTree = (tree) => renderer.create(tree);
describe("<Quote>", () => {
  it("should render component", () => {
    expect(renderTree(<Quote />).toJSON()).toMatchSnapshot();
  });
});
