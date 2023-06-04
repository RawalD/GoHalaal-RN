import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const AboutEvent = () => {
  return (
    <View style={styles.aboutEvent}>
      <View style={styles.content}>
        <View>
          <View style={styles.dateTime}>
            <View style={[styles.believerParent, styles.believerPosition]}>
              <Text style={[styles.believer, styles.popularClr]}>
                Open TIming
              </Text>
              <Text style={styles.majorLazerShowtek}>11AM - 8 PM</Text>
            </View>
            <View style={styles.icon}>
              <View style={[styles.iconChild, styles.childPosition]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
            </View>
          </View>
          <View style={styles.location}>
            <View style={[styles.believerGroup, styles.believerPosition]}>
              <Text style={[styles.believer, styles.popularClr]}>
                Gala Convention Center
              </Text>
              <Text
                style={styles.majorLazerShowtek}
              >{`36 Guild Street London, UK `}</Text>
            </View>
            <View style={[styles.locationChild, styles.childPosition]} />
            <Image
              style={[styles.locationItem, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/group-18184.png")}
            />
          </View>
          <View style={styles.location1}>
            <View style={[styles.believerContainer, styles.believerPosition]}>
              <Text style={[styles.believer, styles.popularClr]}>Email</Text>
              <Text style={styles.majorLazerShowtek}>storename@gmail.com</Text>
            </View>
            <View style={[styles.locationInner, styles.childPosition]} />
            <Image
              style={[styles.groupIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/group-181841.png")}
            />
          </View>
        </View>
        <View style={styles.socialIcons}>
          <Image
            style={styles.socialIconsChild}
            contentFit="cover"
            source={require("../assets/frame-33544.png")}
          />
        </View>
        <View style={styles.aboutEvent1}>
          <View style={[styles.popularParent, styles.popularPosition]}>
            <Text style={[styles.popular, styles.popularTypo]}>
              About Event
            </Text>
            <Text style={[styles.theDevelopmentOf, styles.headerPosition]}>
              Lorem ipsum dolor sit amet, consectetur elit adipiscilit.
              Venenatis pulvinar a amet in, suspendie vitae, posuere eu tortor
              et. Und commodo, fermentum, mauris leo eget. Lorem ipsum dolor sit
              amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet
              in, suspendisse vitae, posuere eu tortor et. Und coodo, fermentum,
              mauris leo eget.
            </Text>
          </View>
          <Image
            style={styles.aboutEventChild}
            contentFit="cover"
            source={require("../assets/vector-10.png")}
          />
        </View>
        <View style={[styles.logInButton, styles.logLayout]}>
          <View style={[styles.logInButtonChild, styles.logLayout]} />
          <Text style={styles.enterEvent}>Enter Event</Text>
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
        <Text style={[styles.helloAshfak, styles.popularTypo]}>
          About Event
        </Text>
        <Image
          style={[styles.headerChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-18129.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  believerPosition: {
    bottom: "1.89%",
    height: "98.11%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  popularClr: {
    opacity: 0.84,
    color: Color.colorTypographyTitle,
    lineHeight: 34,
  },
  childPosition: {
    opacity: 0.25,
    borderRadius: Border.br_xs,
    backgroundColor: Color.secondary,
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  popularPosition: {
    top: "50%",
    marginTop: -103.5,
    left: "0%",
  },
  popularTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  headerPosition: {
    left: 0,
    position: "absolute",
  },
  logLayout: {
    height: 60,
    width: 320,
  },
  believer: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    left: "0%",
    color: Color.colorTypographyTitle,
    lineHeight: 34,
    top: "0%",
    position: "absolute",
  },
  majorLazerShowtek: {
    top: "65.38%",
    fontSize: FontSize.size_xs,
    color: Color.colorTypographySubColor,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  believerParent: {
    width: "62.2%",
    left: "37.8%",
  },
  iconChild: {
    height: "100%",
    right: "0%",
    width: "100%",
    opacity: 0.25,
    borderRadius: Border.br_xs,
    top: "0%",
  },
  vectorIcon: {
    height: "58.33%",
    width: "58.33%",
    top: "18.75%",
    right: "22.92%",
    bottom: "22.92%",
    left: "18.75%",
  },
  icon: {
    width: "29.27%",
    right: "70.73%",
    bottom: "0%",
    top: "9.43%",
    height: "90.57%",
    left: "0%",
    position: "absolute",
  },
  dateTime: {
    width: 164,
    height: 53,
  },
  believerGroup: {
    width: "75.69%",
    left: "24.31%",
  },
  locationChild: {
    width: "18.82%",
    right: "81.18%",
    top: "9.43%",
    height: "90.57%",
    opacity: 0.25,
    borderRadius: Border.br_xs,
  },
  locationItem: {
    height: "56.6%",
    width: "11.76%",
    top: "26.42%",
    right: "84.71%",
    bottom: "16.98%",
    left: "3.53%",
  },
  location: {
    width: 255,
    marginTop: 25,
    height: 53,
  },
  believerContainer: {
    width: "70.19%",
    left: "29.81%",
  },
  locationInner: {
    width: "23.08%",
    right: "76.92%",
    top: "9.43%",
    height: "90.57%",
    opacity: 0.25,
    borderRadius: Border.br_xs,
  },
  groupIcon: {
    height: "39.31%",
    width: "10.02%",
    top: "33.96%",
    right: "83.25%",
    bottom: "26.73%",
    left: "6.73%",
  },
  location1: {
    width: 208,
    marginTop: 25,
    height: 53,
  },
  socialIconsChild: {
    width: 304,
    height: 66,
  },
  socialIcons: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    marginTop: 25,
  },
  popular: {
    top: "50%",
    marginTop: -103.5,
    left: "0%",
    opacity: 0.84,
    color: Color.colorTypographyTitle,
    lineHeight: 34,
  },
  theDevelopmentOf: {
    top: 39,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorTypographyParagraph,
    width: 323,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
  },
  popularParent: {
    height: 207,
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  aboutEventChild: {
    top: 132,
    left: 183,
    width: 6,
    height: 4,
    position: "absolute",
  },
  aboutEvent1: {
    height: 207,
    width: 323,
    marginTop: 25,
  },
  logInButtonChild: {
    top: 0,
    borderRadius: Border.br_3xs,
    left: 0,
    position: "absolute",
    backgroundColor: Color.secondary,
    height: 60,
    width: 320,
  },
  enterEvent: {
    top: 16,
    left: 110,
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  logInButton: {
    marginTop: 25,
  },
  content: {
    top: 109,
    left: 20,
    position: "absolute",
  },
  backIcon: {
    height: "27.5%",
    width: "5.87%",
    top: "62.34%",
    right: "88.29%",
    bottom: "10.16%",
    left: "5.84%",
  },
  helloAshfak: {
    height: "38.75%",
    width: "39.2%",
    top: "57.14%",
    left: "15.18%",
    color: Color.gray_300,
  },
  headerChild: {
    height: "31.17%",
    width: "5.83%",
    top: "61.04%",
    right: "12.22%",
    bottom: "7.79%",
    left: "81.94%",
  },
  header: {
    top: 3,
    width: 360,
    height: 77,
  },
  aboutEvent: {
    backgroundColor: Color.white,
    flex: 1,
    height: 732,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutEvent;
