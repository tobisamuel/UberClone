import styled from "@emotion/native";
import { scale } from "react-native-size-matters";

export const StyledDivider = styled.View(({ theme }) => ({
  width: "100%",
  height: scale(1),
  backgroundColor: theme.colors.disabled,
}));
