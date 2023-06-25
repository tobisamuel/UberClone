import { StyleProp, ViewStyle } from "react-native";

import { StyledDivider } from "./Divider.styles";

const Divider = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return <StyledDivider style={style} />;
};

export default Divider;
