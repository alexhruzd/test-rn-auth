import { storiesOf } from "@storybook/react-native";
import React from "react";
import { CardMovie } from "../../../components/CardMovie/CardMovie";
import CenterView from "../CenterView";

storiesOf("CardMovie", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Empty CardMovie", () => <CardMovie />)
  .add("CardMovie with data", () => (
    <CardMovie
      posterPath="https://lh3.googleusercontent.com/proxy/27avVduyp9XbyYcHV6AEhqpWQ3lDfTiJKEeOPv7fttM1VNg6gjJENOCepT0ubOWzKhf3g3ERKYWz_BjkH8rdAuQvfLDN75Wt4A2T"
      dateRelease="01-01-2000"
      runtime="100m"
      averageRate="10.0"
      overview="This is overview"
    />
  ));
