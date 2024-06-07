// NavBar.js
import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Button from "./Button";

const LogoTuLocal = require("../assets/tulocal-tiktok.png");

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <Image source={LogoTuLocal} style={styles.icono} />
      <Button label={"Registrate"} />
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    height: 100,
    justifyContent: "space-between",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    zIndex: 1,
  },
  icono: {
    height: 60,
    width: 150,
    marginLeft: 10,
  },
});
