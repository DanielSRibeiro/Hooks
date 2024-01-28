import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./src/routes/home";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <SafeAreaView>
        <StatusBar style="auto" />
        <Home />
      </SafeAreaView>
      <Text>Test</Text>
    </View>
  );

  // (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
