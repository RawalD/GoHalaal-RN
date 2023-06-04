import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <Image
        style={[styles.iconArrowLeft, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/-icon-arrow-left.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.rectangle, styles.borderBorder]} />
        <View style={styles.dParent}>
          <Text style={[styles.d, styles.dTypo]}>Edit Profile</Text>
          <Image
            style={[styles.groupChild, styles.barsPosition1]}
            contentFit="cover"
            source={require("../assets/group-33562.png")}
          />
        </View>
      </View>
      <Text style={[styles.mohammadreza, styles.timeFlexBox]}>
        Abdul Shakoor
      </Text>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={[styles.titleBar2, styles.titleBar2Position]}>
        <Text style={[styles.helloAshfak, styles.popularTypo]}>Profile</Text>
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back.png")}
        />
        <View style={[styles.barsStatusBarIphoneLWrapper, styles.barsPosition]}>
          <View style={[styles.barsStatusBarIphoneL, styles.barsPosition]}>
            <View style={styles.batteryParent}>
              <View style={styles.battery}>
                <View style={[styles.border, styles.borderBorder]} />
                <Image
                  style={[styles.capIcon, styles.capIconLayout]}
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
              <View style={[styles.timeStyle, styles.timePosition]}>
                <Text style={[styles.time, styles.timePosition]}>9:41</Text>
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
      <View style={styles.groupParent}>
        <View style={[styles.popularParent, styles.popularPosition]}>
          <Text style={[styles.popular, styles.popularPosition]}>About Me</Text>
          <Text style={[styles.theDevelopmentOf, styles.titleBar2Position]}>
            Lorem ipsum dolor sit amet, consectetur elit adipiscilit. Venenatis
            pulvinar a amet in, suspendie vitae, posuere eu tortor et. Und
            commodo, fermentum, mauris leo eget. Lorem ipsum dolor sit amet,
            consectetur elit adipiscing elit. Venenatis pulvinar a amet in,
            suspendisse vitae, posuere eu tortor et. Und coodo, fermentum,
            mauris leo eget.
          </Text>
        </View>
        <Image
          style={[styles.groupItem, styles.capIconLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  dTypo: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  barsPosition1: {
    left: "0%",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.colorTypographyTitle,
    top: "50%",
  },
  titleBar2Position: {
    left: 0,
    position: "absolute",
  },
  popularTypo: {
    color: Color.colorTypographyTitle,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
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
    right: "0%",
    width: "100%",
  },
  capIconLayout: {
    height: 4,
    position: "absolute",
  },
  timePosition: {
    width: 54,
    left: 0,
    position: "absolute",
  },
  popularPosition: {
    marginTop: -106,
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  iconArrowLeft: {
    height: "2.25%",
    width: "5%",
    top: "4.75%",
    right: "89.72%",
    bottom: "93%",
    left: "5.28%",
    position: "absolute",
  },
  rectangle: {
    height: "103%",
    width: "101.02%",
    top: "-1.5%",
    right: "-0.51%",
    bottom: "-1.5%",
    left: "-0.51%",
    borderRadius: Border.br_3xs,
    borderColor: "#439dfe",
    borderWidth: 1.5,
  },
  d: {
    width: "67.52%",
    left: "32.48%",
    lineHeight: 25,
    color: Color.primary,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    top: "0%",
  },
  groupChild: {
    height: "88%",
    width: "18.8%",
    top: "4%",
    right: "81.2%",
    bottom: "8%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  dParent: {
    height: "50%",
    width: "75.97%",
    top: "26%",
    right: "11.69%",
    bottom: "24%",
    left: "12.34%",
    position: "absolute",
  },
  rectangleParent: {
    top: 281,
    left: 107,
    width: 147,
    height: 50,
    position: "absolute",
  },
  mohammadreza: {
    marginTop: -172,
    width: "42.22%",
    left: "28.89%",
    fontSize: FontSize.size_base,
    textTransform: "capitalize",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 109,
    left: 133,
    width: 92,
    height: 96,
    position: "absolute",
  },
  helloAshfak: {
    width: "19.47%",
    top: "61.25%",
    left: "15.2%",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  backIcon: {
    right: "87.73%",
    left: "6.4%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: "#120d26",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
    top: 0,
  },
  capIcon: {
    top: 4,
    width: 1,
    opacity: 0.4,
    right: 0,
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
    right: 0,
    position: "absolute",
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
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    textAlign: "center",
    color: Color.colorTypographyTitle,
    top: "50%",
  },
  timeStyle: {
    height: 21,
    top: 0,
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
    left: "0%",
    position: "absolute",
    top: "0%",
  },
  barsStatusBarIphoneLWrapper: {
    height: "55%",
    bottom: "45%",
    left: "0%",
    position: "absolute",
    top: "0%",
  },
  moreIcon: {
    right: "6.4%",
    left: "87.73%",
    display: "none",
  },
  titleBar2: {
    width: 360,
    height: 80,
    top: 0,
  },
  popular: {
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    opacity: 0.84,
    color: Color.colorTypographyTitle,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  theDevelopmentOf: {
    top: 44,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorTypographyParagraph,
    width: 323,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  popularParent: {
    height: 212,
    right: "0%",
    width: "100%",
  },
  groupItem: {
    top: 132,
    left: 183,
    width: 6,
  },
  groupParent: {
    marginTop: -44,
    width: "89.72%",
    right: "4.72%",
    left: "5.56%",
    height: 212,
    top: "50%",
    position: "absolute",
  },
  profile: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
