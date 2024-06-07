import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import NavBar from "./components/NavBar";

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00e8f6",
    alignItems: "center",
    justifyContent: "center",
  },
});
