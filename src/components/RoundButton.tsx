import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  icon: "ios-menu-outline" | "arrow-back-outline";
  onPress: () => void;
};

const RoundButton = ({ icon, onPress }: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons name={icon} size={27} />
    </Pressable>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    position: "absolute",
    top: 60,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.8,
    shadowRadius: 7.5,
    elevation: 10,
  },
});
