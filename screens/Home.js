import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.content, styles.contentPosition]}>
        <View style={styles.featuredEvents}>
          <View style={[styles.feature1, styles.featureLayout]}>
            <Image
              style={[styles.maskGroupIcon, styles.featureLayout]}
              contentFit="cover"
              source={require("../assets/mask-group6.png")}
            />
            <LinearGradient
              style={styles.feature1Child}
              locations={[0, 0.25, 1]}
              colors={["#000", "#000", "rgba(0, 0, 0, 0)"]}
            />
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <View style={[styles.groupChild, styles.groupChildPosition1]} />
              <Text style={[styles.armanRokni, styles.armanTypo]}>
                FEATURED
              </Text>
            </View>
            <Text style={[styles.foralLightning, styles.marchTypo]}>
              Foral Lightning
            </Text>
            <Text style={[styles.byUsa, styles.byUsaTypo]}>1240 BY, USA</Text>
            <Text style={[styles.march, styles.marchTypo]}>24 March</Text>
          </View>
          <View style={[styles.feature2, styles.featureLayout]}>
            <Image
              style={[styles.maskGroupIcon, styles.featureLayout]}
              contentFit="cover"
              source={require("../assets/mask-group7.png")}
            />
            <LinearGradient
              style={styles.feature1Child}
              locations={[0, 0.25, 1]}
              colors={["#000", "#000", "rgba(0, 0, 0, 0)"]}
            />
            <View style={[styles.rectangleParent, styles.groupChildLayout]}>
              <View style={[styles.groupChild, styles.groupChildPosition1]} />
              <Text style={[styles.armanRokni, styles.armanTypo]}>
                FEATURED
              </Text>
            </View>
            <Text style={[styles.foralLightning, styles.marchTypo]}>
              Foral Lightning
            </Text>
            <Text style={[styles.byUsa, styles.byUsaTypo]}>1240 BY, USA</Text>
            <Text style={[styles.march, styles.marchTypo]}>24 March</Text>
          </View>
        </View>
        <View style={[styles.advertisemnt, styles.advertisemntLayout]}>
          <View style={[styles.advertisemntChild, styles.advertisemntLayout]} />
          <View style={[styles.surpriseForYouParent, styles.contentPosition]}>
            <Text style={[styles.surpriseForYou, styles.theFirstWalkClr]}>
              Surprise For You
            </Text>
            <Text style={[styles.theFirstWalk, styles.theFirstWalkTypo]}>
              The first walk is free!
            </Text>
          </View>
          <Image
            style={[styles.illustrationIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/illustration1.png")}
          />
        </View>
        <View style={styles.categories}>
          <Text style={[styles.categories1, styles.byUsaTypo]}>Categories</Text>
          <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
          <View style={styles.categories2}>
            <View style={styles.groupViewLayout}>
              <View style={[styles.groupInner, styles.groupChildShadowBox]} />
              <Image
                style={[styles.icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/24761542.png")}
              />
              <Text style={[styles.sports, styles.artTypo]}>Sports</Text>
            </View>
            <View style={[styles.groupView, styles.groupViewLayout]}>
              <View
                style={[styles.rectangleView, styles.groupChildShadowBox]}
              />
              <Image
                style={[styles.groupIcon, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/group-182152.png")}
              />
              <Text style={[styles.music, styles.artTypo]}>Music</Text>
            </View>
            <View style={[styles.groupView, styles.groupViewLayout]}>
              <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
              <Image
                style={[styles.icon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/6853522.png")}
              />
              <Text style={[styles.food, styles.artTypo]}>Food</Text>
            </View>
            <View style={[styles.groupView, styles.groupViewLayout]}>
              <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
              <Image
                style={styles.iconPosition}
                contentFit="cover"
                source={require("../assets/group-182162.png")}
              />
              <Text style={[styles.art, styles.artTypo]}>Art</Text>
            </View>
          </View>
        </View>
        <View style={styles.upcomingEvents}>
          <Text style={[styles.upcomingEvents1, styles.byUsaTypo]}>
            Upcoming Events
          </Text>
          <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
          <View style={styles.upcomingEvents2}>
            <View style={styles.eventLayout}>
              <View style={styles.event1ItemShadowBox} />
              <View style={[styles.image, styles.imageLayout]}>
                <View style={[styles.imageChild, styles.imageLayout]} />
                <Image
                  style={[styles.maskGroupIcon2, styles.imageLayout]}
                  contentFit="cover"
                  source={require("../assets/mask-group8.png")}
                />
                <View
                  style={[
                    styles.rectangleParent3,
                    styles.rectangleParentLayout1,
                  ]}
                >
                  <View
                    style={[styles.groupChild4, styles.groupChildPosition]}
                  />
                  <Image
                    style={[styles.groupChild5, styles.groupIconLayout]}
                    contentFit="cover"
                    source={require("../assets/group-181292.png")}
                  />
                </View>
                <View
                  style={[
                    styles.rectangleParent4,
                    styles.rectangleParentLayout,
                  ]}
                >
                  <View
                    style={[styles.groupChild6, styles.rectangleParentLayout]}
                  />
                  <Text style={[styles.armanRokni2, styles.armanTypo]}>
                    <Text style={styles.armanRokniTxtContainer}>
                      <Text style={styles.text}>{`10
`}</Text>
                      <Text style={styles.june}>June</Text>
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.text1}>
                <Text
                  style={[
                    styles.foralSingingInternation,
                    styles.findForStoresTypo,
                  ]}
                >
                  Foral Singing Internation
                </Text>
                <Text style={[styles.clubRoadUsa, styles.clubRoadUsaTypo]}>
                  412, Club Road, USA
                </Text>
                <Image
                  style={[styles.iconMapPin, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/-icon-map-pin.png")}
                />
              </View>
            </View>
            <View style={[styles.event2, styles.eventLayout]}>
              <View style={styles.event1ItemShadowBox} />
              <Image
                style={[styles.image, styles.imageLayout]}
                contentFit="cover"
                source={require("../assets/image2.png")}
              />
              <View
                style={[
                  styles.rectangleParent5,
                  styles.rectangleParentPosition,
                ]}
              >
                <View style={[styles.groupChild4, styles.groupChildPosition]} />
                <Image
                  style={[styles.groupChild5, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group-181292.png")}
                />
              </View>
              <View
                style={[
                  styles.rectangleParent6,
                  styles.rectangleParentPosition,
                ]}
              >
                <View
                  style={[styles.groupChild6, styles.rectangleParentLayout]}
                />
                <Text style={[styles.armanRokni2, styles.armanTypo]}>
                  <Text style={styles.armanRokniTxtContainer}>
                    <Text style={styles.text}>{`10
`}</Text>
                    <Text style={styles.june}>JAN</Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.text1}>
                <Text
                  style={[
                    styles.foralSingingInternation,
                    styles.findForStoresTypo,
                  ]}
                >
                  Foral Singing Internation
                </Text>
                <Text style={[styles.clubRoadUsa, styles.clubRoadUsaTypo]}>
                  412, Club Road, USA
                </Text>
                <Image
                  style={[styles.iconMapPin, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/-icon-map-pin.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.banner}>
          <View style={[styles.rectangle, styles.rectanglePosition]} />
          <Image
            style={[styles.bannerChild, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group-336502.png")}
          />
          <View style={styles.internationalGalaMParent}>
            <Text style={[styles.internationalGalaM, styles.rectanglePosition]}>
              Invite your friends
            </Text>
            <Text style={[styles.madisonAveNew, styles.rectanglePosition]}>
              Get $20 for ticket
            </Text>
            <View style={[styles.groupChild10, styles.groupChildPosition1]} />
            <Text style={[styles.invite, styles.seeAllTypo]}>Invite</Text>
          </View>
        </View>
        <View style={styles.upcomingEvents}>
          <Text style={[styles.upcomingEvents1, styles.byUsaTypo]}>
            All Events
          </Text>
          <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
          <View style={styles.upcomingEvents2}>
            <View style={styles.eventLayout}>
              <View style={styles.event1ItemShadowBox} />
              <View style={[styles.image, styles.imageLayout]}>
                <View style={[styles.imageChild, styles.imageLayout]} />
                <Image
                  style={[styles.maskGroupIcon2, styles.imageLayout]}
                  contentFit="cover"
                  source={require("../assets/mask-group3.png")}
                />
                <View
                  style={[
                    styles.rectangleParent3,
                    styles.rectangleParentLayout1,
                  ]}
                >
                  <View
                    style={[styles.groupChild4, styles.groupChildPosition]}
                  />
                  <Image
                    style={[styles.groupChild5, styles.groupIconLayout]}
                    contentFit="cover"
                    source={require("../assets/group-181292.png")}
                  />
                </View>
                <View
                  style={[
                    styles.rectangleParent4,
                    styles.rectangleParentLayout,
                  ]}
                >
                  <View
                    style={[styles.groupChild6, styles.rectangleParentLayout]}
                  />
                  <Text style={[styles.armanRokni2, styles.armanTypo]}>
                    <Text style={styles.armanRokniTxtContainer}>
                      <Text style={styles.text}>{`10
`}</Text>
                      <Text style={styles.june}>June</Text>
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.text1}>
                <Text
                  style={[
                    styles.foralSingingInternation,
                    styles.findForStoresTypo,
                  ]}
                >
                  Foral Singing Internation
                </Text>
                <Text style={[styles.clubRoadUsa, styles.clubRoadUsaTypo]}>
                  412, Club Road, USA
                </Text>
                <Image
                  style={[styles.iconMapPin, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/-icon-map-pin.png")}
                />
              </View>
            </View>
            <View style={[styles.event2, styles.eventLayout]}>
              <View style={styles.event1ItemShadowBox} />
              <Image
                style={[styles.image, styles.imageLayout]}
                contentFit="cover"
                source={require("../assets/image2.png")}
              />
              <View
                style={[
                  styles.rectangleParent5,
                  styles.rectangleParentPosition,
                ]}
              >
                <View style={[styles.groupChild4, styles.groupChildPosition]} />
                <Image
                  style={[styles.groupChild5, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group-181292.png")}
                />
              </View>
              <View
                style={[
                  styles.rectangleParent6,
                  styles.rectangleParentPosition,
                ]}
              >
                <View
                  style={[styles.groupChild6, styles.rectangleParentLayout]}
                />
                <Text style={[styles.armanRokni2, styles.armanTypo]}>
                  <Text style={styles.armanRokniTxtContainer}>
                    <Text style={styles.text}>{`10
`}</Text>
                    <Text style={styles.june}>JAN</Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.text1}>
                <Text
                  style={[
                    styles.foralSingingInternation,
                    styles.findForStoresTypo,
                  ]}
                >
                  Foral Singing Internation
                </Text>
                <Text style={[styles.clubRoadUsa, styles.clubRoadUsaTypo]}>
                  412, Club Road, USA
                </Text>
                <Image
                  style={[styles.iconMapPin, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/-icon-map-pin.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.searchLayout]} />
        <Image
          style={[styles.iconSearch, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-search.png")}
        />
        <Text style={[styles.findForStores, styles.findForStoresTypo]}>
          Find for stores and event...
        </Text>
      </View>
      <Image
        style={[styles.headerIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/header.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    left: 16,
    position: "absolute",
  },
  featureLayout: {
    width: 254,
    height: 120,
  },
  groupChildLayout: {
    height: 25,
    width: 65,
  },
  groupChildPosition1: {
    backgroundColor: Color.primary,
    borderRadius: Border.br_8xs,
    left: 0,
    position: "absolute",
  },
  armanTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    top: "50%",
    position: "absolute",
  },
  marchTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  byUsaTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  advertisemntLayout: {
    height: 155,
    width: 320,
  },
  theFirstWalkClr: {
    color: Color.gray_300,
    letterSpacing: -0.1,
  },
  theFirstWalkTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  seeAllTypo: {
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    left: 0,
    top: 0,
  },
  iconPosition: {
    height: 40,
    width: 40,
    left: 25,
    top: 20,
    position: "absolute",
  },
  artTypo: {
    lineHeight: 25,
    top: 65,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupViewLayout: {
    height: 100,
    width: 90,
  },
  imageLayout: {
    height: 131,
    width: 218,
    position: "absolute",
  },
  rectangleParentLayout1: {
    height: 30,
    width: 30,
  },
  groupChildPosition: {
    backgroundColor: Color.gray_500,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 45,
    width: 45,
  },
  findForStoresTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  clubRoadUsaTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  iconLayout: {
    width: "6.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  eventLayout: {
    height: 212,
    width: 237,
  },
  rectangleParentPosition: {
    top: 15,
    position: "absolute",
  },
  rectanglePosition: {
    left: "0%",
    position: "absolute",
  },
  searchLayout: {
    height: 50,
    width: 320,
    position: "absolute",
  },
  maskGroupIcon: {
    left: 0,
    top: 0,
    height: 120,
    position: "absolute",
  },
  feature1Child: {
    width: 253,
    backgroundColor: Color.linearGradient,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 120,
    position: "absolute",
  },
  groupChild: {
    height: 25,
    width: 65,
    top: 0,
  },
  armanRokni: {
    marginTop: -7.5,
    left: "12.25%",
    color: Color.white,
    fontSize: FontSize.size_3xs,
  },
  rectangleParent: {
    left: 179,
    top: 9,
    position: "absolute",
  },
  foralLightning: {
    top: 74,
    color: Color.primary,
    fontSize: FontSize.size_base,
    left: 14,
    position: "absolute",
  },
  byUsa: {
    top: 96,
    left: 14,
    color: Color.white,
    fontSize: FontSize.size_3xs,
  },
  march: {
    top: 63,
    left: 14,
    color: Color.white,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  feature1: {
    height: 120,
  },
  feature2: {
    marginLeft: 10,
    height: 120,
  },
  featuredEvents: {
    flexDirection: "row",
  },
  advertisemntChild: {
    backgroundColor: Color.secondary,
    opacity: 0.5,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  surpriseForYou: {
    width: 136,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  theFirstWalk: {
    fontSize: FontSize.size_mid,
    width: 164,
    color: Color.gray_300,
    letterSpacing: -0.1,
  },
  surpriseForYouParent: {
    top: 31,
    justifyContent: "center",
  },
  illustrationIcon: {
    height: "68.53%",
    width: "42.23%",
    top: "15.48%",
    right: "3.39%",
    bottom: "15.98%",
    left: "54.38%",
  },
  advertisemnt: {
    marginTop: 32,
  },
  categories1: {
    left: 2,
    color: Color.black,
    fontSize: FontSize.size_base,
    top: 0,
  },
  seeAll: {
    top: 3,
    left: 280,
    textAlign: "right",
    color: Color.primary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  groupInner: {
    backgroundColor: Color.salmon,
    shadowColor: "rgba(46, 46, 79, 0.12)",
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 100,
    width: 90,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  sports: {
    left: 26,
  },
  rectangleView: {
    backgroundColor: Color.lightsalmon,
    shadowColor: "rgba(46, 46, 79, 0.12)",
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 100,
    width: 90,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupIcon: {
    width: "41.33%",
    top: "19.9%",
    right: "29.44%",
    bottom: "40.1%",
    left: "29.23%",
    height: "40%",
  },
  music: {
    left: 27,
  },
  groupView: {
    marginLeft: 10,
  },
  groupChild1: {
    backgroundColor: Color.mediumseagreen,
    shadowColor: "rgba(46, 46, 79, 0.12)",
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 100,
    width: 90,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  food: {
    left: 31,
  },
  groupChild2: {
    backgroundColor: Color.deepskyblue,
    shadowColor: "rgba(46, 46, 79, 0.12)",
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    height: 100,
    width: 90,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  art: {
    left: 36,
  },
  categories2: {
    top: 35,
    left: 0,
    flexDirection: "row",
    position: "absolute",
  },
  categories: {
    width: 390,
    height: 135,
    marginTop: 32,
  },
  upcomingEvents1: {
    color: Color.black,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  event1ItemShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_mini,
    height: 212,
    width: 237,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  imageChild: {
    backgroundColor: Color.khaki,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  maskGroupIcon2: {
    left: 0,
    top: 0,
  },
  groupChild4: {
    borderRadius: Border.br_6xs,
    height: 30,
    width: 30,
  },
  groupChild5: {
    height: "46.67%",
    width: "46.99%",
    top: "26.67%",
    right: "26.34%",
    bottom: "26.67%",
    left: "26.67%",
  },
  rectangleParent3: {
    left: 180,
    top: 6,
    position: "absolute",
  },
  groupChild6: {
    backgroundColor: Color.gray_500,
    left: 0,
    top: 0,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  text: {
    lineHeight: 6,
    fontSize: FontSize.size_lg,
  },
  june: {
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
  },
  armanRokniTxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  armanRokni2: {
    marginTop: -9.5,
    width: "73.33%",
    left: "13.33%",
    display: "flex",
    alignItems: "center",
    height: 27,
    color: Color.primary,
  },
  rectangleParent4: {
    left: 8,
    top: 6,
    position: "absolute",
  },
  image: {
    left: 9,
    top: 9,
  },
  foralSingingInternation: {
    color: Color.black,
    left: 0,
    top: 0,
  },
  clubRoadUsa: {
    top: 26,
    left: 17,
    fontSize: FontSize.size_xs,
    position: "absolute",
    color: Color.black,
  },
  iconMapPin: {
    height: "29.55%",
    top: "64.77%",
    right: "93.91%",
    bottom: "5.68%",
    left: "-0.16%",
  },
  text1: {
    top: 154,
    left: 10,
    width: 173,
    height: 44,
    position: "absolute",
  },
  rectangleParent5: {
    left: 189,
    height: 30,
    width: 30,
  },
  rectangleParent6: {
    left: 17,
    height: 45,
    width: 45,
  },
  event2: {
    marginLeft: 10,
  },
  upcomingEvents2: {
    top: 44,
    left: 0,
    flexDirection: "row",
    position: "absolute",
  },
  upcomingEvents: {
    width: 484,
    height: 256,
    marginTop: 32,
  },
  rectangle: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    backgroundColor: Color.mediumslateblue,
    borderRadius: Border.br_xs,
    top: "0%",
    width: "100%",
  },
  bannerChild: {
    height: "116.31%",
    width: "103.66%",
    right: "-4.88%",
    bottom: "-16.31%",
    left: "1.22%",
    top: "0%",
  },
  internationalGalaM: {
    marginTop: -48,
    lineHeight: 34,
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    top: "50%",
  },
  madisonAveNew: {
    marginTop: -14,
    width: "83.65%",
    color: Color.slategray_100,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    fontSize: FontSize.size_smi,
    top: "50%",
  },
  groupChild10: {
    top: 64,
    width: 72,
    height: 32,
  },
  invite: {
    top: 68,
    left: 18,
    lineHeight: 23,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.white,
    textTransform: "uppercase",
    fontSize: FontSize.size_xs,
  },
  internationalGalaMParent: {
    marginTop: -50.5,
    width: "48.48%",
    right: "46.04%",
    left: "5.49%",
    height: 96,
    top: "50%",
    position: "absolute",
  },
  banner: {
    width: 328,
    height: 141,
    marginTop: 32,
  },
  content: {
    top: 165,
  },
  searchChild: {
    backgroundColor: Color.gray_100,
    shadowColor: "rgba(211, 209, 216, 0.15)",
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    left: 0,
    top: 0,
  },
  iconSearch: {
    top: "32%",
    right: "7.5%",
    bottom: "28%",
    left: "86.25%",
    height: "40%",
  },
  findForStores: {
    top: "30%",
    left: "6.25%",
    color: Color.slategray_200,
  },
  search: {
    top: 90,
    left: 20,
  },
  headerIcon: {
    height: "2.07%",
    width: "89.17%",
    top: "2.41%",
    right: "5.56%",
    bottom: "95.52%",
    left: "5.28%",
  },
  home: {
    flex: 1,
    height: 1450,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Home;
