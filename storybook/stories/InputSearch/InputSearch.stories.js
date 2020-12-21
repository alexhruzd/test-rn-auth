import { storiesOf } from "@storybook/react-native";
import React from "react";
import InputSearch from "../../../components/InputSearch";
import CenterView from "../CenterView";

storiesOf("InputSearch", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default InputSearch", () => (
    <InputSearch />
  ))
  .add("InputSearch with placeholder", () => (
    <InputSearch placeholder="This is placeholder"/>
  ))
  .add("InputSearch with icon", () => (
    <InputSearch placeholder="This is placeholder" withIcon/>
  ));

