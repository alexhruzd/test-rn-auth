import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Text } from "react-native";
import AccordionListItem from "../../../components/AccordionListItem";
import CenterView from "../CenterView";

storiesOf("Accordion", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Text Item", () => (
    <AccordionListItem title="Item">
      <Text>{text("Accordion text", "This is Accordion")}</Text>
    </AccordionListItem>
  ));
