import { useEffect, useRef, useState } from "react";
import MapView, { type UserLocationChangeEvent } from "react-native-maps";

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export default function useMapScreen() {
  const mapRef = useRef<MapView>(null);
  const [userLocation, setUserLocation] =
    useState<UserLocationChangeEvent["nativeEvent"]["coordinate"]>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (userLocation) {
      mapRef.current?.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
    }
  }, [userLocation]);

  function handleUserLocationChange({
    nativeEvent: { coordinate },
  }: UserLocationChangeEvent) {
    setUserLocation(coordinate);
  }

  function handleSearchBarPress() {
    setModalVisible(true);
  }

  function CloseDestinationModal() {
    setModalVisible(false);
  }

  return {
    models: { mapRef, modalVisible },
    operations: {
      CloseDestinationModal,
      handleUserLocationChange,
      handleSearchBarPress,
    },
  };
}
