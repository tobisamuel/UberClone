import DestinationModal from "@/components/DestinationModal/DestinationModal";
import { StyledMapView } from "./MapScreen.styles";
import RoundButton from "@/components/RoundButton/RoundButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import useMapScreen from "@/hooks/useMapScreen";

export default function MapScreen() {
  const { models, operations } = useMapScreen();

  return (
    <>
      <StyledMapView
        onUserLocationChange={operations.handleUserLocationChange}
        ref={models.mapRef}
        showsCompass={false}
        showsUserLocation={true}
        showsMyLocationButton={false}
      />

      <RoundButton icon="ios-menu-outline" onPress={() => {}} />
      <SearchBar onPress={operations.handleSearchBarPress} />
      <DestinationModal
        closeModal={operations.CloseDestinationModal}
        visible={models.modalVisible}
      />
    </>
  );
}
