import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider } from "native-base";
import { Text } from "react-native";
import Calculadora from "./components/Calculadora";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Box>
        <Calculadora />
      </Box>
    </NativeBaseProvider>
  );
}
