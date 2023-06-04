import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <Image
        style={[styles.image1Icon, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.loginChild, styles.childPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <View style={styles.content}>
        <Text style={[styles.signIn, styles.signClr]}>Sign In</Text>
        <Text style={[styles.pleaseSignIn, styles.pleaseSignInTypo]}>
          Please sign in to continue
        </Text>
        <Text style={[styles.dontHaveAnContainer, styles.pleaseSignInTypo]}>
          <Text style={styles.dontHaveAn}>{`Dont Have an Account?  `}</Text>
          <Text style={styles.register}>Register</Text>
        </Text>
        <View style={[styles.registrationFields, styles.childPosition]}>
          <View style={[styles.notificationAction, styles.notificationBg]}>
            <View style={[styles.eMailParent, styles.parentPosition]}>
              <Text style={[styles.eMail, styles.eMailFlexBox]}>E-mail</Text>
              <Text style={[styles.abdulshakoorgmailcom, styles.eMailTypo]}>
                abdulshakoor@gmail.com
              </Text>
            </View>
          </View>
          <View
            style={[styles.notificationAction1, styles.logInButtonSpaceBlock]}
          >
            <View style={[styles.groupParent, styles.parentPosition]}>
              <Image
                style={[styles.groupChild, styles.childPosition]}
                contentFit="cover"
                source={require("../assets/group-17.png")}
              />
              <View style={[styles.passwordWrapper, styles.childPosition]}>
                <Text style={[styles.eMail, styles.eMailFlexBox]}>
                  Password
                </Text>
              </View>
              <Image
                style={styles.iconlylighthide}
                contentFit="cover"
                source={require("../assets/iconlylighthide1.png")}
              />
            </View>
          </View>
          <View style={[styles.logInButton, styles.logInButtonSpaceBlock]}>
            <View style={[styles.logInButtonChild, styles.childPosition]} />
            <Text style={[styles.logIn, styles.eMailFlexBox]}>Log In</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    left: 0,
    position: "absolute",
  },
  signClr: {
    color: Color.black,
    left: 4,
    textAlign: "left",
  },
  pleaseSignInTypo: {
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  notificationBg: {
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_sm,
  },
  parentPosition: {
    left: 16,
    position: "absolute",
  },
  eMailFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  eMailTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
  },
  logInButtonSpaceBlock: {
    marginTop: 22,
    width: 310,
  },
  image1Icon: {
    width: 576,
    height: 1072,
    top: 0,
  },
  loginChild: {
    top: 377,
    width: 360,
    height: 423,
    opacity: 0.9,
  },
  signIn: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  pleaseSignIn: {
    top: 41,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.black,
    left: 4,
  },
  dontHaveAn: {
    color: Color.gray_200,
  },
  register: {
    color: Color.primary,
  },
  dontHaveAnContainer: {
    top: 339,
    left: 39,
    textAlign: "right",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  eMail: {
    fontSize: FontSize.size_3xs,
    lineHeight: 24,
    color: Color.darkgray,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  abdulshakoorgmailcom: {
    top: 18,
    letterSpacing: -0.1,
    color: Color.gray_300,
    fontSize: FontSize.size_sm,
    position: "absolute",
    textAlign: "left",
  },
  eMailParent: {
    top: 8,
    width: 188,
    height: 39,
  },
  notificationAction: {
    height: 60,
    width: 310,
  },
  groupChild: {
    top: 25,
    width: 94,
    height: 6,
  },
  passwordWrapper: {
    width: 49,
    height: 24,
    top: 0,
  },
  iconlylighthide: {
    height: "51.97%",
    width: "6.62%",
    top: "33.12%",
    right: "0%",
    bottom: "14.91%",
    left: "93.38%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParent: {
    top: 11,
    width: 273,
    height: 31,
  },
  notificationAction1: {
    height: 58,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_sm,
  },
  logInButtonChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primary,
    height: 60,
    width: 310,
    top: 0,
  },
  logIn: {
    top: 16,
    left: 127,
    fontSize: FontSize.size_lg,
    color: Color.white,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  logInButton: {
    height: 60,
  },
  registrationFields: {
    top: 87,
  },
  content: {
    top: 410,
    left: 25,
    height: 360,
    width: 310,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Login;
