import styled from "@emotion/native";
import { Dimensions } from "react-native";
import type { EdgeInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

type Props = {
  insets: EdgeInsets;
};

export const Container = styled.View<Props>(({ insets }) => ({
  top: insets.top + scale(60),
  position: "absolute",
  alignSelf: "center",
}));

export const StyledPressable = styled.Pressable(({ theme }) => ({
  backgroundColor: theme.colors.background,
  width: Dimensions.get("window").width - scale(50),
  minHeight: scale(42),
  flexDirection: "row",
  alignItems: "center",
  padding: scale(15),
  ...theme.shadows,
}));

export const Square = styled.View(({ theme }) => ({
  width: scale(7),
  height: scale(7),
  marginRight: scale(20),
  backgroundColor: theme.colors.foreground,
}));
