import { View, Text } from "react-native";
import React from "react";

import { BodyText } from "./CustomText.styles";

type CustomText = {
  variant: "body";
  children: string;
};

function getComponent(variant: CustomText["variant"]) {
  switch (variant) {
    case "body":
      return BodyText;
    default:
      return BodyText;
  }
}

const CustomText = ({ children, variant }: CustomText) => {
  const Component = getComponent(variant);

  return <Component>{children}</Component>;
};

export default CustomText;
