import styled from "@emotion/native";
import { EdgeInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

type Props = {
  insets: EdgeInsets;
};

export const StyledPressable = styled.Pressable<Props>(({ theme, insets }) => ({
  width: scale(45),
  height: scale(45),
  borderRadius: scale(45 / 2),
  backgroundColor: "#fff",
  position: "absolute",
  top: insets.top || scale(20),
  left: scale(20),
  alignItems: "center",
  justifyContent: "center",
  ...theme.shadows,
}));
