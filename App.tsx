import { ThemeProvider } from "@/context/ThemeContext";
import useLocationPermission from "@/hooks/useLocationPermission";
import MapScreen from "@/screens/MapScreen";

export default function App() {
  const { location, errorMsg } = useLocationPermission();

  return (
    <ThemeProvider>
      <MapScreen />
    </ThemeProvider>
  );
}
