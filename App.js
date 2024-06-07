// App.js
import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";

import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavBar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <ItemList />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#00e8f6",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
