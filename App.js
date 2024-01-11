import { StatusBar } from "expo-status-bar";
import { Box, NativeBaseProvider } from "native-base";
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
