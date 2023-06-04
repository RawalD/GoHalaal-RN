import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const GetStarted = () => {
  return (
    <View style={styles.getStarted}>
      <Image
        style={[styles.image1Icon, styles.borderPosition]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Image
        style={styles.getStartedChild}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Text style={styles.pleaseReadOurContainer}>
        <Text style={styles.pleaseReadOur}>{`Please read our `}</Text>
        <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
      </Text>
      <Text style={[styles.welcome, styles.videoTypo]}>Welcome</Text>
      <Text style={[styles.video, styles.videoTypo]}>Video</Text>
      <Text style={styles.contraryToPopular}>
        Contrary to popular belief, Lorem Ipsum is not simply.
      </Text>
      <View style={styles.registrationFields}>
        <View style={styles.logInButtonLayout}>
          <View style={[styles.logInButtonChild, styles.childLayout]} />
          <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
        </View>
        <View style={[styles.createAccount, styles.logInButtonLayout]}>
          <View style={[styles.createAccountChild, styles.childLayout]} />
          <Text style={[styles.register, styles.logInTypo]}>Register</Text>
        </View>
      </View>
      <View style={styles.barsStatusBarIphoneL}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi3.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection3.png")}
        />
        <View style={[styles.timeStyle, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  videoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_3xs,
    height: 60,
    width: 310,
    left: 0,
    top: 0,
    position: "absolute",
  },
  logInTypo: {
    fontSize: FontSize.size_lg,
    top: 16,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  logInButtonLayout: {
    height: 60,
    width: 310,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  image1Icon: {
    width: 392,
    height: 809,
    left: 0,
  },
  getStartedChild: {
    top: 447,
    width: 360,
    height: 353,
    opacity: 0.9,
    left: 0,
    position: "absolute",
  },
  pleaseReadOur: {
    color: Color.gray_200,
  },
  termsConditions: {
    color: Color.primary,
  },
  pleaseReadOurContainer: {
    top: 755,
    left: 53,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  welcome: {
    top: 475,
    fontSize: 28,
    color: Color.gray_300,
    textAlign: "left",
    left: 25,
  },
  video: {
    top: 151,
    left: 106,
    fontSize: 50,
    color: Color.white,
  },
  contraryToPopular: {
    top: 519,
    fontFamily: FontFamily.poppinsRegular,
    width: 310,
    textAlign: "left",
    color: Color.gray_300,
    left: 25,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  logInButtonChild: {
    backgroundColor: Color.primary,
  },
  logIn: {
    left: 127,
  },
  createAccountChild: {
    backgroundColor: Color.secondary,
  },
  register: {
    left: 116,
  },
  createAccount: {
    marginTop: 22,
  },
  registrationFields: {
    top: 577,
    left: 25,
    position: "absolute",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
    position: "absolute",
    backgroundColor: Color.white,
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 16,
    height: 10,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    color: Color.white,
    textAlign: "center",
    left: 0,
  },
  timeStyle: {
    top: 7,
    left: 21,
    height: 21,
  },
  barsStatusBarIphoneL: {
    height: "5.29%",
    top: "-0.12%",
    right: "0%",
    bottom: "94.83%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  getStarted: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default GetStarted;
