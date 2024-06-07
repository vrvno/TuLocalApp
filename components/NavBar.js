import { StyleSheet, Text, View, Image } from "react-native";

const LogoTuLocal = require("../assets/tulocal-tiktok.png");

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <Image source={LogoTuLocal} style={styles.icono} />
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    height: 100,
    width: 500,
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
  },
  icono: {
    height: 40,
    width: 170,
  },
});
