import { Modal } from "react-native";
import React from "react";

import { StyledFlatlist } from "./DestinationModal.styles";
import FlatListHeader from "./Header";
import RoundButton from "../RoundButton/RoundButton";

type Props = {
  closeModal: () => void;
  visible: boolean;
};

const DestinationModal = ({ closeModal, visible }: Props) => {
  function renderFlatlistItem() {
    return null;
  }

  return (
    <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
      <RoundButton icon="arrow-back-outline" onPress={closeModal} />
      <StyledFlatlist
        data={[]}
        renderItem={renderFlatlistItem}
        ListHeaderComponent={FlatListHeader}
      />
    </Modal>
  );
};

export default DestinationModal;
