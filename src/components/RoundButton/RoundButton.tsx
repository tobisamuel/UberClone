import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { StyledPressable } from "./RoundButton.styles";

type Props = {
  icon: "ios-menu-outline" | "arrow-back-outline";
  onPress: () => void;
};

const RoundButton = ({ icon, onPress }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <StyledPressable insets={insets} onPress={onPress}>
      <Ionicons name={icon} size={27} />
    </StyledPressable>
  );
};

export default RoundButton;
