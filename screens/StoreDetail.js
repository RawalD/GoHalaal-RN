import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const StoreDetail = () => {
  return (
    <View style={styles.storeDetail}>
      <Image
        style={styles.storeDetailChild}
        contentFit="cover"
        source={require("../assets/frame-33543.png")}
      />
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={[styles.storeTitle, styles.storeTitleTypo]}>
            Store Title
          </Text>
          <Image
            style={[styles.titleChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-18129.png")}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.dateTime}>
            <View style={[styles.believerParent, styles.believerPosition]}>
              <Text style={[styles.believer, styles.popularLayout]}>
                Open TIming
              </Text>
              <Text style={[styles.majorLazerShowtek, styles.storeTitleTypo]}>
                11AM - 8 PM
              </Text>
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
              <Text style={[styles.believer, styles.popularLayout]}>
                Gala Convention Center
              </Text>
              <Text
                style={[styles.majorLazerShowtek, styles.storeTitleTypo]}
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
              <Text style={[styles.believer, styles.popularLayout]}>Email</Text>
              <Text style={[styles.majorLazerShowtek, styles.storeTitleTypo]}>
                storename@gmail.com
              </Text>
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
            source={require("../assets/frame-335441.png")}
          />
        </View>
        <View style={styles.aboutEvent}>
          <View style={[styles.popularParent, styles.popularPosition]}>
            <Text style={[styles.popular, styles.popularTypo]}>
              About Store
            </Text>
            <Text style={[styles.theDevelopmentOf, styles.believerTypo]}>
              Lorem ipsum dolor sit amet, consectetur elit adipiscilit.
              Venenatis pulvinar a amet in, suspendie vitae, posuere eu tortor
              et. Und commodo, fermentum, mauris leo eget. Lorem ipsum dolor sit
              amet, consectetur elit adipiscing elit. Venenatis pulvinar a amet
              in, suspendisse vitae, posuere eu tortor et. Und coodo, fermentum,
              mauris leo eget.
            </Text>
          </View>
          <Image
            style={[styles.aboutEventChild, styles.capIconLayout]}
            contentFit="cover"
            source={require("../assets/vector-10.png")}
          />
        </View>
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
        <Text style={[styles.helloAshfak, styles.popularTypo]}>
          Store Detail
        </Text>
      </View>
      <View style={[styles.barsStatusBarIphoneL, styles.iconChildPosition]}>
        <View style={[styles.batteryParent, styles.headerPosition]}>
          <View style={[styles.battery, styles.borderLayout]}>
            <View style={[styles.border, styles.borderLayout]} />
            <Image
              style={[styles.capIcon, styles.capIconLayout]}
              contentFit="cover"
              source={require("../assets/cap1.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection1.png")}
          />
          <View style={[styles.timeStyle, styles.timeLayout]}>
            <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  storeTitleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  believerPosition: {
    bottom: "1.89%",
    height: "98.11%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  popularLayout: {
    opacity: 0.84,
    lineHeight: 34,
    color: Color.colorTypographyTitle,
  },
  childPosition: {
    opacity: 0.25,
    backgroundColor: Color.secondary,
    borderRadius: Border.br_xs,
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  popularPosition: {
    marginTop: -103.5,
    top: "50%",
    left: "0%",
  },
  popularTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  believerTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  capIconLayout: {
    height: 4,
    position: "absolute",
  },
  headerPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  iconChildPosition: {
    right: "0%",
    width: "100%",
  },
  borderLayout: {
    height: 11,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  storeDetailChild: {
    width: 367,
    height: 255,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  storeTitle: {
    color: Color.colorTypographyTitle,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    width: 325,
    left: 0,
    top: 0,
  },
  titleChild: {
    height: "88.89%",
    width: "6.46%",
    top: "3.7%",
    right: "2.77%",
    bottom: "7.41%",
    left: "90.77%",
  },
  title: {
    height: 27,
    width: 325,
  },
  believer: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
    left: "0%",
    top: "0%",
  },
  majorLazerShowtek: {
    top: "65.38%",
    fontSize: FontSize.size_xs,
    color: Color.colorTypographySubColor,
    left: "0%",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  believerParent: {
    width: "62.2%",
    left: "37.8%",
  },
  iconChild: {
    height: "100%",
    right: "0%",
    width: "100%",
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
    backgroundColor: Color.secondary,
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
    height: 53,
    marginTop: 25,
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
    backgroundColor: Color.secondary,
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
    height: 53,
    marginTop: 25,
  },
  details: {
    marginTop: 25,
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
    lineHeight: 34,
    color: Color.colorTypographyTitle,
  },
  theDevelopmentOf: {
    top: 39,
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    color: Color.colorTypographyParagraph,
    width: 323,
    left: 0,
  },
  popularParent: {
    top: "50%",
    height: 207,
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  aboutEventChild: {
    top: 132,
    left: 183,
    width: 6,
  },
  aboutEvent: {
    height: 207,
    width: 323,
    marginTop: 25,
  },
  content: {
    top: 284,
    left: 20,
    position: "absolute",
  },
  backIcon: {
    height: "27.5%",
    width: "5.87%",
    top: "61.04%",
    right: "88.29%",
    bottom: "11.46%",
    left: "5.84%",
  },
  helloAshfak: {
    height: "38.75%",
    width: "39.2%",
    top: "55.84%",
    left: "15.18%",
    color: Color.white,
  },
  header: {
    top: 3,
    height: 77,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    top: 0,
  },
  capIcon: {
    top: 4,
    right: 0,
    width: 1,
    opacity: 0.4,
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
    top: 16,
    right: 15,
    width: 24,
  },
  wifiIcon: {
    width: 15,
    height: 9,
  },
  cellularConnectionIcon: {
    width: 16,
    height: 9,
  },
  time: {
    marginTop: -3.5,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    textAlign: "center",
    color: Color.white,
    top: "50%",
    left: 0,
  },
  timeStyle: {
    top: 6,
    left: 21,
    height: 21,
  },
  batteryParent: {
    top: 1,
    height: 254,
    overflow: "hidden",
  },
  barsStatusBarIphoneL: {
    height: "4.81%",
    top: "-0.11%",
    bottom: "95.3%",
    left: "0%",
    position: "absolute",
  },
  storeDetail: {
    flex: 1,
    height: 880,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default StoreDetail;
