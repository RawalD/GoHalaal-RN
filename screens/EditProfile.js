import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const EditProfile = () => {
  return (
    <View style={styles.editProfile}>
      <Image
        style={[styles.iconArrowLeft, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/-icon-arrow-left.png")}
      />
      <View style={[styles.titleBar2, styles.borderPosition]}>
        <Text style={[styles.helloAshfak, styles.helloAshfakTypo]}>
          Edit Profile
        </Text>
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <View style={[styles.barsStatusBarIphoneLWrapper, styles.barsPosition]}>
          <View style={[styles.barsStatusBarIphoneL, styles.barsPosition]}>
            <View style={styles.batteryParent}>
              <View style={[styles.battery, styles.batteryPosition]}>
                <View style={[styles.border, styles.borderPosition]} />
                <Image
                  style={[styles.capIcon, styles.batteryPosition]}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={styles.capacity} />
              </View>
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi.png")}
              />
              <Image
                style={styles.cellularConnectionIcon}
                contentFit="cover"
                source={require("../assets/cellular-connection.png")}
              />
              <View style={[styles.timeStyle, styles.timeLayout]}>
                <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.moreIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/more.png")}
        />
      </View>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Image
        style={[styles.cameraIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/camera-icon.png")}
      />
      <View style={styles.editProfile1}>
        <View style={[styles.name, styles.nameLayout]}>
          <View style={[styles.fullnameParent, styles.parentPosition]}>
            <Text style={[styles.fullname, styles.eMailTypo]}>Fullname</Text>
            <Text style={[styles.abdulShakoor, styles.helloAshfakTypo]}>
              Abdul Shakoor
            </Text>
          </View>
        </View>
        <View style={[styles.email, styles.emailLayout]}>
          <View style={[styles.eMailParent, styles.parentPosition]}>
            <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
            <Text style={[styles.abdulShakoor, styles.helloAshfakTypo]}>
              abdulshakoor@gmail.com
            </Text>
          </View>
        </View>
        <View style={[styles.email, styles.emailLayout]}>
          <View style={[styles.phoneParent, styles.parentPosition]}>
            <Text style={[styles.phone1, styles.eMailTypo]}>Phone</Text>
            <Text style={[styles.abdulShakoor, styles.helloAshfakTypo]}>
              +123456789
            </Text>
          </View>
        </View>
        <View style={styles.emailLayout}>
          <View style={[styles.logInButtonChild, styles.nameLayout]} />
          <Text style={[styles.register, styles.timeTypo]}>Register</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  helloAshfakTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    bottom: "6.25%",
    top: "66.25%",
    width: "5.87%",
    height: "27.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  barsPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    left: 0,
  },
  timeTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  nameLayout: {
    height: 60,
    width: 310,
  },
  parentPosition: {
    height: 39,
    left: 16,
    top: 8,
    position: "absolute",
  },
  eMailTypo: {
    color: Color.darkgray,
    lineHeight: 24,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  emailLayout: {
    marginTop: 22,
    height: 60,
    width: 310,
  },
  iconArrowLeft: {
    height: "2.25%",
    width: "5%",
    top: "4.75%",
    right: "89.72%",
    bottom: "93%",
    left: "5.28%",
  },
  helloAshfak: {
    top: "61.25%",
    left: "15.2%",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorTypographyTitle,
  },
  backIcon: {
    right: "87.73%",
    left: "6.4%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#120d26",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorTypographyTitle,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 10,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 16,
    height: 11,
  },
  time: {
    marginTop: -3.5,
    top: "50%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    textAlign: "center",
    width: 54,
    left: 0,
    color: Color.colorTypographyTitle,
  },
  timeStyle: {
    height: 21,
    top: 0,
    position: "absolute",
  },
  batteryParent: {
    top: 7,
    right: 15,
    width: 324,
    height: 22,
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "100%",
    bottom: "0%",
  },
  barsStatusBarIphoneLWrapper: {
    height: "55%",
    bottom: "45%",
  },
  moreIcon: {
    right: "6.4%",
    left: "87.73%",
    display: "none",
  },
  titleBar2: {
    width: 360,
    height: 80,
    left: 0,
  },
  maskGroupIcon: {
    top: 109,
    left: 133,
    width: 92,
    height: 96,
    position: "absolute",
  },
  cameraIcon: {
    height: "3.88%",
    width: "8.61%",
    top: "22.38%",
    right: "38.61%",
    bottom: "73.75%",
    left: "52.78%",
  },
  fullname: {
    left: 1,
    textAlign: "center",
  },
  abdulShakoor: {
    top: 18,
    fontSize: FontSize.size_sm,
    letterSpacing: -0.1,
    color: Color.gray_300,
    textAlign: "left",
    left: 0,
  },
  fullnameParent: {
    width: 103,
  },
  name: {
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_sm,
  },
  eMail: {
    textAlign: "center",
    left: 0,
  },
  eMailParent: {
    width: 188,
  },
  email: {
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_sm,
  },
  phone1: {
    textAlign: "left",
    left: 0,
  },
  phoneParent: {
    width: 84,
  },
  logInButtonChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primary,
    left: 0,
    top: 0,
    position: "absolute",
  },
  register: {
    top: 16,
    left: 116,
    fontSize: FontSize.size_lg,
    color: Color.white,
    textAlign: "center",
  },
  editProfile1: {
    top: 264,
    left: 25,
    position: "absolute",
  },
  editProfile: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default EditProfile;
