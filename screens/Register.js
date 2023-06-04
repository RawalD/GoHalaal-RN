import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Register = () => {
  return (
    <View style={styles.register}>
      <Text style={styles.goHalaal}>Go Halaal</Text>
      <Text style={[styles.register1, styles.register1Position]}>Register</Text>
      <Text style={[styles.pleaseSignIn, styles.pleaseSignInTypo]}>
        Please sign in to continue
      </Text>
      <Text style={[styles.alreadyHaveAnContainer, styles.pleaseSignInTypo]}>
        <Text style={styles.alreadyHaveAn}>{`Already Have an Account?  `}</Text>
        <Text style={styles.login}>Login</Text>
      </Text>
      <View style={styles.registrationFields}>
        <View style={[styles.name, styles.nameLayout]}>
          <View style={[styles.fullnameParent, styles.parentPosition]}>
            <Text style={[styles.fullname, styles.eMailTypo]}>Fullname</Text>
            <Text style={[styles.abdulShakoor, styles.eMailPosition]}>
              Abdul Shakoor
            </Text>
          </View>
        </View>
        <View style={[styles.email, styles.emailSpaceBlock]}>
          <View style={[styles.eMailParent, styles.parentPosition]}>
            <Text style={[styles.eMail, styles.eMailPosition]}>E-mail</Text>
            <Text style={[styles.abdulShakoor, styles.eMailPosition]}>
              abdulshakoor@gmail.com
            </Text>
          </View>
        </View>
        <View style={[styles.password, styles.emailSpaceBlock]}>
          <View style={styles.groupParent}>
            <Image
              style={[styles.groupChild, styles.eMailPosition]}
              contentFit="cover"
              source={require("../assets/group-17.png")}
            />
            <View style={[styles.passwordWrapper, styles.eMailPosition]}>
              <Text style={[styles.eMail, styles.eMailPosition]}>Password</Text>
            </View>
            <Image
              style={styles.iconlylighthide}
              contentFit="cover"
              source={require("../assets/iconlylighthide.png")}
            />
          </View>
        </View>
        <View style={[styles.email, styles.emailSpaceBlock]}>
          <View style={[styles.phoneParent, styles.parentPosition]}>
            <Text style={[styles.phone1, styles.eMailPosition]}>Phone</Text>
            <Text style={[styles.abdulShakoor, styles.eMailPosition]}>
              +123456789
            </Text>
          </View>
        </View>
        <View style={[styles.logInButton, styles.emailSpaceBlock]}>
          <View style={[styles.logInButtonChild, styles.childPosition]} />
          <Text style={[styles.register2, styles.eClr]}>Register</Text>
        </View>
      </View>
      <View style={[styles.logo, styles.logoLayout]}>
        <View style={[styles.logoChild, styles.logoLayout]} />
        <Text style={[styles.e, styles.eClr]}>E</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  register1Position: {
    left: 30,
    textAlign: "left",
    color: Color.black,
  },
  pleaseSignInTypo: {
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  nameLayout: {
    width: 310,
    height: 60,
  },
  parentPosition: {
    height: 39,
    top: 8,
    left: 16,
    position: "absolute",
  },
  eMailTypo: {
    color: Color.darkgray,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
  },
  eMailPosition: {
    left: 0,
    position: "absolute",
  },
  emailSpaceBlock: {
    marginTop: 22,
    width: 310,
  },
  childPosition: {
    backgroundColor: Color.primary,
    left: 0,
    top: 0,
  },
  eClr: {
    color: Color.white,
    position: "absolute",
  },
  logoLayout: {
    height: 73,
    width: 73,
    position: "absolute",
  },
  goHalaal: {
    top: 149,
    left: 120,
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  register1: {
    top: 211,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    left: 30,
    position: "absolute",
  },
  pleaseSignIn: {
    top: 252,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: 30,
    color: Color.black,
  },
  alreadyHaveAn: {
    color: Color.gray_200,
  },
  login: {
    color: Color.primary,
  },
  alreadyHaveAnContainer: {
    top: 749,
    left: 64,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  fullname: {
    left: 1,
    textAlign: "center",
    position: "absolute",
  },
  abdulShakoor: {
    top: 18,
    letterSpacing: -0.1,
    color: Color.gray_300,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  fullnameParent: {
    width: 103,
  },
  name: {
    height: 60,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_sm,
  },
  eMail: {
    color: Color.darkgray,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    textAlign: "center",
  },
  eMailParent: {
    width: 188,
  },
  email: {
    height: 60,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_sm,
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
    left: 0,
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
    left: 16,
    position: "absolute",
  },
  password: {
    height: 58,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_sm,
  },
  phone1: {
    color: Color.darkgray,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    textAlign: "left",
  },
  phoneParent: {
    width: 84,
  },
  logInButtonChild: {
    borderRadius: Border.br_3xs,
    height: 60,
    width: 310,
    position: "absolute",
  },
  register2: {
    top: 16,
    left: 116,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  logInButton: {
    height: 60,
  },
  registrationFields: {
    top: 321,
    left: 25,
    position: "absolute",
  },
  logoChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.primary,
    left: 0,
    top: 0,
  },
  e: {
    top: 19,
    left: 12,
    fontSize: 60,
    lineHeight: 16,
    fontFamily: FontFamily.playballRegular,
    display: "flex",
    alignItems: "center",
    width: 37,
    height: 46,
    transform: [
      {
        rotate: "-10deg",
      },
    ],
    textAlign: "left",
  },
  logo: {
    top: 66,
    left: 143,
  },
  register: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Register;
