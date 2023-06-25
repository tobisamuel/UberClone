import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Container, Square, StyledPressable } from "./SearchBar.styles";
import CustomText from "../common/CustomText/CustomText";

export default function SearchBar({ onPress }: { onPress: () => void }) {
  const insets = useSafeAreaInsets();

  return (
    <Container insets={insets}>
      <StyledPressable onPress={onPress}>
        <Square />
        <CustomText variant="body">Where To?</CustomText>
      </StyledPressable>
    </Container>
  );
}
