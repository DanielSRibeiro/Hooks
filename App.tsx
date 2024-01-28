import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";
import MyNavigationContainer from "../Hooks/scr/navigator/myNavigationContainer";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Test</Text>
      <StatusBar />
      <MyNavigationContainer />
      <Text>Test</Text>
    </SafeAreaView>
  );
}
