import React from "react";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

import RoundButton from "@/components/RoundButton";
import useMapScreen from "@/hooks/useMapScreen";

export default function MapScreen() {
  const { models, operations } = useMapScreen();

  return (
    <>
      <MapView
        onUserLocationChange={operations.handleUserLocationChange}
        ref={models.mapRef}
        showsCompass={false}
        showsUserLocation={true}
        showsMyLocationButton={false}
        style={styles.map}
      />

      <RoundButton icon="ios-menu-outline" onPress={() => {}} />
    </>
  );
}

const styles = StyleSheet.create({
  map: { flex: 1 },
});
