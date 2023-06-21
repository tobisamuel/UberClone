import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import useMapScreen from "@/hooks/useMapScreen";

export default function MapScreen() {
  const { models, operations } = useMapScreen();

  return (
    <MapView
      onUserLocationChange={operations.handleUserLocationChange}
      ref={models.mapRef}
      showsCompass={false}
      showsUserLocation={true}
      showsMyLocationButton={false}
      style={styles.map}
    />
  );
}

const styles = StyleSheet.create({
  map: { flex: 1 },
});
