import { storiesOf } from "@storybook/react-native";
import React from "react";
import CheckBoxItem from "../../../components/CheckBoxItem/CheckBoxItem";
import CenterView from "../CenterView";
import { action } from '@storybook/addon-actions';


storiesOf("CheckBox", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default CheckBox", () => (
   <CheckBoxItem onCheked={action("On cheched")} title="default" flexDirection="row" />
  ))
  .add("Watched CheckBox", () => (
   <CheckBoxItem onCheked={action("On cheched")} title="Watched" iconName="watched"/>
  ))
  .add("Unwatched CheckBox", () => (
   <CheckBoxItem onCheked={action("On cheched")} title="Watched" iconName="unwatched"/>
  ));
