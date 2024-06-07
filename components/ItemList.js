import { StyleSheet, View, Image } from "react-native";

import Item from "./Item";

const DiarioImage = require("../assets/diario.jpg");
const Planner = require("../assets/planner.jpg");
const Cuaderno = require("../assets/cuaderno.jpg");
const Libreta = require("../assets/libreta.jpg");
const Barras = require("../assets/barras.jpg");
const Vaper = require("../assets/vaper.jpg");

export default function ItemList() {
  return (
    <View style={styles.container}>
      <Item imageSource={DiarioImage} Nombre={"Diario"} Precio={5000} />
      <Item imageSource={Planner} Nombre={"Planner"} Precio={2000} />
      <Item imageSource={Cuaderno} Nombre={"Cuaderno"} Precio={6000} />
      <Item imageSource={Libreta} Nombre={"Libreta"} Precio={4000} />
      <Item imageSource={Barras} Nombre={"Barras Protéicas"} Precio={20000} />
      <Item imageSource={Vaper} Nombre={"Vaper"} Precio={50000} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 60,
  },
});
