import React from "react";

import { cleanup, render } from "@testing-library/react-native";

import SettingsScreen from "../screens/SettingsScreen";
import AuthContext from "../context/auth/AuthContext";

afterEach(cleanup);

describe("SettingScreen", () => {
  it("should find the button via testId", () => {
    const testIdName = "logOutButton";
    const { toJSON, getByTestId } = render(
      <AuthContext.Provider value={{ onSingOut: () => {} }}>
        <SettingsScreen />
      </AuthContext.Provider>
    );
    const foundButton = getByTestId(testIdName);

    expect(foundButton).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
