import React from "react";

import { cleanup, render } from "@testing-library/react-native";

import HomeScreen from "../screens/HomeScreen";

afterEach(cleanup);

describe("HomeScreen", () => {
  it("should show Hello!! This is HomePage", () => {
    const homeText = "Hello!! This is HomePage!";
    const notFoundText = "Not found text";

    const { toJSON, getByText, queryByText } = render(<HomeScreen />);

    const foundHomeText = getByText(homeText);
    const notFoundTextElement = queryByText(notFoundText);

    expect(foundHomeText.props.children).toEqual(homeText);
    expect(notFoundTextElement).toBeNull();
    expect(toJSON()).toMatchSnapshot();
  });
});

describe("HomeScreen", () => {
  it("should not find a dynamic component", () => {
    const {queryByTestId} = render(<HomeScreen />);

    const notFindDynamicElement = queryByTestId("dinamic component");

    expect(notFindDynamicElement).toBeNull();
  });
});
