import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <View style={[styles.logo, styles.logoLayout]}>
        <View style={[styles.logoChild, styles.logoLayout]} />
        <Text style={styles.e}>E</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoLayout: {
    height: 94,
    width: 94,
    position: "absolute",
  },
  logoChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xs,
    backgroundColor: Color.primary,
  },
  e: {
    top: 24,
    left: 16,
    fontSize: 80,
    lineHeight: 16,
    fontFamily: FontFamily.playballRegular,
    color: Color.white,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 47,
    height: 59,
    transform: [
      {
        rotate: "-10deg",
      },
    ],
    position: "absolute",
  },
  logo: {
    top: 326,
    left: 133,
  },
  splash: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Splash;
