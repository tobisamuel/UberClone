import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useLocationPermission from "@/hooks/useLocationPermission";
import MapScreen from "@/screens/MapScreen/MapScreen";
import ThemeProvider from "@/theme/ThemeProvider";

export default function App() {
  const { location, errorMsg } = useLocationPermission();

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <MapScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
