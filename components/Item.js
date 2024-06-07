import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default function Item({ imageSource, Nombre, Precio }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nombreProducto}>{Nombre}</Text>
        <Text style={styles.precioProducto}>${Precio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
    zIndex: 1,
  },
  imageContainer: {
    flex: 3,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    backgroundColor: "#1a1d1e",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  nombreProducto: {
    color: "white",
    fontSize: 24,
    fontWeight: "900",
  },
  precioProducto: {
    color: "white",
    fontSize: 18,
  },
});
