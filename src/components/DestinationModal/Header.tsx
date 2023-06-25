import { useSafeAreaInsets } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";

import Divider from "../common/Divider/Divider";
import {
  Container,
  DecoratorCircle,
  DecoratorContainer,
  DecoratorLine,
  DecoratorSquare,
  HContainer,
  InputsContainer,
} from "./DestinationModal.styles";
import DestinationInput from "./Input";

export const FlatListHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Container>
        <HContainer
          style={{ marginTop: insets.top + scale(55), gap: scale(10) }}
        >
          <DecoratorContainer>
            <DecoratorCircle />
            <DecoratorLine />
            <DecoratorSquare />
          </DecoratorContainer>

          <InputsContainer style={{ gap: scale(10) }}>
            <DestinationInput disabled={true} placeholder="Current Location" />
            <DestinationInput disabled={false} placeholder="Current Location" />
          </InputsContainer>
        </HContainer>
      </Container>
      <Divider style={{ marginTop: scale(10) }} />
    </>
  );
};

export default FlatListHeader;
