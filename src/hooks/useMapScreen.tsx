import { useEffect, useRef, useState } from "react";
import MapView, { type UserLocationChangeEvent } from "react-native-maps";

const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = 0.005;

export default function useMapScreen() {
  const mapRef = useRef<MapView>(null);
  const [userLocation, setUserLocation] =
    useState<UserLocationChangeEvent["nativeEvent"]["coordinate"]>();

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

  return { models: { mapRef }, operations: { handleUserLocationChange } };
}
