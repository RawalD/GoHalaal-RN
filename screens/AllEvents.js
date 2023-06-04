import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const AllEvents = () => {
  return (
    <View style={styles.allEvents}>
      <View style={styles.latestEvent}>
        <View style={styles.event1}>
          <View style={[styles.event1Child, styles.childShadowBox]} />
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Image
              style={[styles.groupItem, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group-181293.png")}
            />
          </View>
          <View style={[styles.image, styles.imageLayout]}>
            <View style={[styles.imageChild, styles.imagePosition]} />
            <Image
              style={[styles.maskGroupIcon, styles.imageLayout]}
              contentFit="cover"
              source={require("../assets/mask-group4.png")}
            />
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Text style={styles.armanRokni}>
                <Text style={styles.armanRokniTxtContainer}>
                  <Text style={styles.text}>{`10
`}</Text>
                  <Text style={styles.june}>June</Text>
                </Text>
              </Text>
            </View>
          </View>
          <Text style={[styles.foralSingingInternational, styles.foralFlexBox]}>
            Foral Singing International
          </Text>
          <Text style={[styles.clubRoadUsa, styles.clubTypo]}>
            412, Club Road, USA
          </Text>
          <Image
            style={[styles.iconMapPin, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-map-pin1.png")}
          />
        </View>
        <View style={[styles.event2, styles.eventSpaceBlock]}>
          <View style={[styles.event2Child, styles.childShadowBox]} />
          <Image
            style={[styles.image, styles.imageLayout]}
            contentFit="cover"
            source={require("../assets/image1.png")}
          />
          <View
            style={[styles.rectangleContainer, styles.clubRoadUsa1Position]}
          >
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Text style={styles.armanRokni}>
              <Text style={styles.armanRokniTxtContainer}>
                <Text style={styles.text}>{`10
`}</Text>
                <Text style={styles.june}>June</Text>
              </Text>
            </Text>
          </View>
          <View style={styles.text2}>
            <Text style={[styles.foralSingingInternation, styles.foralFlexBox]}>
              Foral Singing Internation
            </Text>
            <Text style={[styles.clubRoadUsa1, styles.clubRoadUsa1Position]}>
              412, Club Road, USA
            </Text>
            <Image
              style={[styles.iconMapPin1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/-icon-map-pin.png")}
            />
          </View>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Image
              style={[styles.groupItem, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group-181294.png")}
            />
          </View>
        </View>
        <View style={[styles.event3, styles.eventSpaceBlock]}>
          <View style={[styles.event3Child, styles.childShadowBox]} />
          <View style={[styles.image1, styles.imageLayout]}>
            <View style={[styles.imageItem, styles.imagePosition]} />
            <Image
              style={[styles.maskGroupIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/mask-group5.png")}
            />
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <Text style={styles.armanRokni}>
                <Text style={styles.armanRokniTxtContainer}>
                  <Text style={styles.text}>{`10
`}</Text>
                  <Text style={styles.june}>June</Text>
                </Text>
              </Text>
            </View>
          </View>
          <Image
            style={[styles.iconBookmark, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-bookmark.png")}
          />
          <Text style={[styles.foralSingingInternational, styles.foralFlexBox]}>
            Foral Singing Internation
          </Text>
          <Text style={[styles.clubRoadUsa, styles.clubTypo]}>
            412, Club Road, USA
          </Text>
          <Image
            style={[styles.iconMapPin2, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-map-pin1.png")}
          />
        </View>
      </View>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.searchLayout]} />
        <Image
          style={[styles.iconSearch, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
        <Text style={[styles.findForStores, styles.foralFlexBox]}>
          Find for stores and event...
        </Text>
      </View>
      <View style={[styles.header, styles.headerLayout]}>
        <Text style={[styles.allEvents1, styles.foralFlexBox]}>All Events</Text>
        <Image
          style={[styles.iconArrowLeft, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-arrow-left1.png")}
        />
        <Image
          style={[styles.headerChild, styles.headerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4158.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    height: 37,
    width: 37,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  imageLayout: {
    height: 131,
    position: "absolute",
  },
  imagePosition: {
    backgroundColor: Color.khaki,
    borderRadius: Border.br_3xs,
    height: 131,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    width: 45,
  },
  foralFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  clubTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
  },
  eventSpaceBlock: {
    marginTop: 20,
    width: 320,
  },
  clubRoadUsa1Position: {
    left: 17,
    position: "absolute",
  },
  iconLayout: {
    width: "6.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchLayout: {
    height: 50,
    width: 320,
    position: "absolute",
  },
  headerLayout: {
    height: 30,
    position: "absolute",
  },
  event1Child: {
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderRadius: Border.br_mini,
    height: 213,
    width: 320,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild: {
    borderRadius: Border.br_6xs,
    backgroundColor: Color.secondary,
    opacity: 0.3,
    left: 0,
    top: 0,
  },
  groupItem: {
    height: "54.05%",
    width: "48.65%",
    top: "21.62%",
    right: "24.32%",
    bottom: "24.32%",
    left: "27.03%",
  },
  rectangleParent: {
    top: 157,
    left: 268,
  },
  imageChild: {
    width: 219,
  },
  maskGroupIcon: {
    width: 300,
    height: 131,
    left: 0,
    top: 0,
  },
  groupInner: {
    backgroundColor: Color.gray_400,
    borderRadius: Border.br_3xs,
    width: 45,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_lg,
    lineHeight: 6,
  },
  june: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
  },
  armanRokniTxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  armanRokni: {
    marginTop: -9.5,
    width: "73.33%",
    top: "50%",
    left: "13.33%",
    textTransform: "uppercase",
    color: Color.primary,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    height: 27,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleGroup: {
    top: 6,
    left: 8,
    position: "absolute",
  },
  image: {
    width: 300,
    height: 131,
    left: 10,
    top: 9,
  },
  foralSingingInternational: {
    top: 148,
    left: 15,
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  clubRoadUsa: {
    top: 177,
    left: 34,
    position: "absolute",
  },
  iconMapPin: {
    height: "6.15%",
    width: "3.17%",
    top: "84.27%",
    right: "92.34%",
    bottom: "9.57%",
    left: "4.49%",
  },
  event1: {
    height: 213,
    width: 320,
  },
  event2Child: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 212,
    borderRadius: Border.br_mini,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    width: 320,
    position: "absolute",
    backgroundColor: Color.white,
  },
  rectangleContainer: {
    top: 15,
    height: 45,
    width: 45,
  },
  foralSingingInternation: {
    color: Color.black,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    top: 0,
  },
  clubRoadUsa1: {
    top: 26,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.black,
  },
  iconMapPin1: {
    height: "29.55%",
    top: "64.77%",
    right: "93.91%",
    bottom: "5.68%",
    left: "-0.16%",
  },
  text2: {
    top: 154,
    width: 173,
    height: 44,
    left: 10,
    position: "absolute",
  },
  event2: {
    height: 212,
  },
  event3Child: {
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    borderRadius: Border.br_mini,
    height: 213,
    width: 320,
    position: "absolute",
    backgroundColor: Color.white,
  },
  imageItem: {
    width: 218,
  },
  maskGroupIcon1: {
    height: "100%",
    width: "99.67%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0.33%",
  },
  image1: {
    left: 9,
    width: 301,
    top: 9,
  },
  iconBookmark: {
    height: "11.74%",
    width: "6.7%",
    top: "77%",
    right: "7.36%",
    bottom: "11.27%",
    left: "85.94%",
  },
  iconMapPin2: {
    height: "5.68%",
    width: "2.85%",
    top: "302.82%",
    right: "92.5%",
    bottom: "-208.5%",
    left: "4.65%",
  },
  event3: {
    height: 213,
  },
  latestEvent: {
    top: 166,
    left: 20,
    position: "absolute",
  },
  searchChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.gray_100,
    shadowColor: "rgba(211, 209, 216, 0.15)",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    left: 0,
    top: 0,
  },
  iconSearch: {
    height: "40%",
    top: "32%",
    right: "7.5%",
    bottom: "28%",
    left: "86.25%",
  },
  findForStores: {
    top: "30%",
    left: "6.25%",
    color: Color.slategray_200,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  search: {
    top: 90,
    left: 20,
  },
  allEvents1: {
    top: 3,
    left: 33,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.black,
    textAlign: "left",
  },
  iconArrowLeft: {
    height: "60%",
    width: "5.63%",
    top: "20%",
    right: "94.69%",
    bottom: "20%",
    left: "-0.31%",
  },
  headerChild: {
    left: 290,
    borderRadius: Border.br_11xl,
    width: 30,
    top: 0,
    height: 30,
  },
  header: {
    top: 35,
    width: 320,
    left: 20,
  },
  allEvents: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default AllEvents;
