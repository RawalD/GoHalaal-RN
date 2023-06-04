import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EventDetail = () => {
  return (
    <View style={styles.eventDetail}>
      <View style={styles.barsStatusBarIphoneL}>
        <View style={[styles.battery, styles.borderLayout]}>
          <View style={[styles.border, styles.borderLayout]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap2.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi2.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection2.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
        </View>
      </View>
      <Image
        style={[styles.pexelsMarkAngelo15879271Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/pexelsmarkangelo1587927-1.png")}
      />
      <View style={styles.content}>
        <View style={styles.title}>
          <Text
            style={styles.foralSingingConcert}
          >{`Foral Singing Concert International `}</Text>
          <View style={[styles.date, styles.dateLayout1]}>
            <LinearGradient
              style={[styles.dateChild, styles.dateLayout1]}
              locations={[0, 1]}
              colors={["#439dfe", "#f687ff"]}
            />
            <Text style={styles.dec}>DEC</Text>
            <Text style={[styles.text, styles.textTypo]}>21</Text>
          </View>
        </View>
        <View style={styles.details}>
          <View style={styles.dateTime}>
            <View style={[styles.believerParent, styles.believerPosition]}>
              <Text style={[styles.believer, styles.believerTypo]}>
                Concert
              </Text>
              <Text
                style={styles.majorLazerShowtek}
              >{`Starts at 4:00PM `}</Text>
            </View>
            <View style={[styles.icon, styles.iconPosition1]}>
              <View style={[styles.iconChild, styles.childBg]} />
              <Image
                style={[styles.vectorIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
            </View>
          </View>
          <View style={styles.location}>
            <View style={[styles.believerGroup, styles.believerPosition]}>
              <Text style={[styles.believer, styles.believerTypo]}>
                Gala Convention Center
              </Text>
              <Text
                style={styles.majorLazerShowtek}
              >{`36 Guild Street London, UK `}</Text>
            </View>
            <Image
              style={[styles.locationIcon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/location.png")}
            />
          </View>
        </View>
        <View style={[styles.advertisemnt, styles.advertisemntLayout]}>
          <View style={[styles.advertisemntChild, styles.advertisemntLayout]} />
          <View style={styles.surpriseForYouParent}>
            <Text style={[styles.surpriseForYou, styles.theFirstWalkClr]}>
              Surprise For You
            </Text>
            <Text style={[styles.theFirstWalk, styles.theFirstWalkTypo]}>
              The first walk is free!
            </Text>
          </View>
          <Image
            style={[styles.illustrationIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/illustration.png")}
          />
        </View>
        <View style={[styles.featuredStores, styles.categoriesLayout]}>
          <View style={[styles.featuredStores1, styles.frameFlexBox]}>
            <View style={styles.storeLayout}>
              <View style={styles.store2ItemShadowBox} />
              <View
                style={[styles.imGoingToShakeYParent, styles.jazzIconPosition]}
              >
                <Text
                  style={[styles.imGoingTo, styles.goingTypo]}
                >{`36 Guild Street London, UK `}</Text>
                <Text style={[styles.imGoingTo1, styles.goingTypo]}>
                  Friday
                </Text>
                <Text style={[styles.storeTitle, styles.dec1Clr]}>
                  Store title
                </Text>
              </View>
              <Image
                style={[styles.jazzIcon, styles.jazzIconPosition]}
                contentFit="cover"
                source={require("../assets/-jazz.png")}
              />
            </View>
            <View style={[styles.store2, styles.storeLayout]}>
              <View style={styles.store2ItemShadowBox} />
              <View
                style={[styles.imGoingToShakeYParent, styles.jazzIconPosition]}
              >
                <Text
                  style={[styles.imGoingTo, styles.goingTypo]}
                >{`36 Guild Street London, UK `}</Text>
                <Text style={[styles.imGoingTo1, styles.goingTypo]}>
                  Friday
                </Text>
                <Text style={[styles.storeTitle, styles.dec1Clr]}>
                  Store title
                </Text>
              </View>
              <Image
                style={[styles.jazzIcon, styles.jazzIconPosition]}
                contentFit="cover"
                source={require("../assets/-jazz.png")}
              />
            </View>
          </View>
          <Text style={[styles.seeAll, styles.dec1Clr]}>See All</Text>
          <Text style={[styles.featuredStores2, styles.storeTitleTypo]}>
            Featured Stores
          </Text>
        </View>
        <View style={[styles.categories, styles.categoriesLayout]}>
          <Text style={[styles.featuredStores2, styles.storeTitleTypo]}>
            Categories
          </Text>
          <Text style={[styles.seeAll, styles.dec1Clr]}>See All</Text>
          <View style={[styles.categories2, styles.frameFlexBox]}>
            <View style={styles.rectangleLayout}>
              <View style={[styles.groupChild, styles.groupChildShadowBox]} />
              <Image
                style={[styles.icon1, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/2476154.png")}
              />
              <Text style={[styles.sports, styles.artTypo]}>Sports</Text>
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupItem, styles.groupChildShadowBox]} />
              <Image
                style={[styles.groupInner, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/group-18215.png")}
              />
              <Text style={[styles.music, styles.artTypo]}>Music</Text>
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View
                style={[styles.rectangleView, styles.groupChildShadowBox]}
              />
              <Image
                style={[styles.icon1, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/685352.png")}
              />
              <Text style={[styles.food, styles.artTypo]}>Food</Text>
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
              <Image
                style={styles.iconPosition}
                contentFit="cover"
                source={require("../assets/group-18216.png")}
              />
              <Text style={[styles.art, styles.artTypo]}>Art</Text>
            </View>
          </View>
        </View>
        <View style={styles.banner}>
          <View style={[styles.rectangle, styles.iconChildPosition]} />
          <Image
            style={[styles.bannerChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-33650.png")}
          />
          <View style={styles.internationalGalaMParent}>
            <Text style={[styles.internationalGalaM, styles.believerTypo]}>
              Invite your friends
            </Text>
            <Text style={[styles.madisonAveNew, styles.theFirstWalkTypo]}>
              Get $20 for ticket
            </Text>
            <View style={[styles.groupChild2, styles.childPosition]} />
            <Text style={[styles.invite, styles.seeAllTypo]}>Invite</Text>
          </View>
        </View>
        <View style={[styles.featuredStores, styles.categoriesLayout]}>
          <View style={[styles.featuredStores1, styles.frameFlexBox]}>
            <View style={styles.storeLayout}>
              <View style={styles.store2ItemShadowBox} />
              <View
                style={[styles.imGoingToShakeYParent, styles.jazzIconPosition]}
              >
                <Text
                  style={[styles.imGoingTo, styles.goingTypo]}
                >{`36 Guild Street London, UK `}</Text>
                <Text style={[styles.imGoingTo1, styles.goingTypo]}>
                  Friday
                </Text>
                <Text style={[styles.storeTitle, styles.dec1Clr]}>
                  Store title
                </Text>
              </View>
              <Image
                style={[styles.jazzIcon, styles.jazzIconPosition]}
                contentFit="cover"
                source={require("../assets/-jazz1.png")}
              />
            </View>
            <View style={[styles.store2, styles.storeLayout]}>
              <View style={styles.store2ItemShadowBox} />
              <View
                style={[styles.imGoingToShakeYParent, styles.jazzIconPosition]}
              >
                <Text
                  style={[styles.imGoingTo, styles.goingTypo]}
                >{`36 Guild Street London, UK `}</Text>
                <Text style={[styles.imGoingTo1, styles.goingTypo]}>
                  Friday
                </Text>
                <Text style={[styles.storeTitle, styles.dec1Clr]}>
                  Store title
                </Text>
              </View>
              <Image
                style={[styles.jazzIcon, styles.jazzIconPosition]}
                contentFit="cover"
                source={require("../assets/-jazz1.png")}
              />
            </View>
          </View>
          <Text style={[styles.seeAll, styles.dec1Clr]}>See All</Text>
          <Text
            style={[styles.featuredStores2, styles.storeTitleTypo]}
          >{`All Stores `}</Text>
        </View>
        <View style={styles.competitions}>
          <View style={[styles.featuredStores1, styles.frameFlexBox]}>
            <View style={styles.competitionLayout}>
              <Image
                style={[styles.maskGroupIcon, styles.competitionLayout]}
                contentFit="cover"
                source={require("../assets/mask-group1.png")}
              />
              <View style={[styles.date1, styles.dateLayout]}>
                <View style={[styles.dateItem, styles.dateLayout]} />
                <Text style={[styles.dec1, styles.dec1Typo]}>DEC</Text>
                <Text style={[styles.text1, styles.dec1Clr]}>21</Text>
              </View>
              <Text
                style={[styles.participants25, styles.participants25Position]}
              >
                Participants: 25
              </Text>
              <Text
                style={[styles.competitionTitle, styles.participants25Position]}
              >
                Competition Title
              </Text>
            </View>
            <View style={[styles.competition2, styles.competitionLayout]}>
              <Image
                style={[styles.maskGroupIcon, styles.competitionLayout]}
                contentFit="cover"
                source={require("../assets/mask-group2.png")}
              />
              <View style={[styles.date1, styles.dateLayout]}>
                <View style={[styles.dateItem, styles.dateLayout]} />
                <Text style={[styles.dec1, styles.dec1Typo]}>DEC</Text>
                <Text style={[styles.text1, styles.dec1Clr]}>21</Text>
              </View>
              <Text
                style={[styles.participants25, styles.participants25Position]}
              >
                Participants: 25
              </Text>
              <Text
                style={[styles.competitionTitle, styles.participants25Position]}
              >
                Competition Title
              </Text>
            </View>
          </View>
          <Text style={[styles.featuredStores2, styles.storeTitleTypo]}>
            Competitions
          </Text>
        </View>
        <View style={[styles.logInButton, styles.logLayout]}>
          <View style={[styles.logInButtonChild, styles.childPosition]} />
          <Text style={[styles.aboutEvent, styles.storeTitleTypo]}>
            About Event
          </Text>
        </View>
      </View>
      <View style={styles.sponsers}>
        <View style={[styles.rectangle1, styles.groupChildShadowBox]} />
        <View style={[styles.frame, styles.frameFlexBox]}>
          <Image
            style={styles.image90Icon}
            contentFit="cover"
            source={require("../assets/image-90.png")}
          />
          <Image
            style={[styles.image91Icon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/image-91.png")}
          />
          <Image
            style={[styles.image91Icon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/image-92.png")}
          />
          <Image
            style={[styles.takedaLogo1Icon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/takeda-logo-1.png")}
          />
          <Image
            style={[styles.yexfii4ld2jdbznv1Icon, styles.iconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/yexfii4ld2jdbznv-1.png")}
          />
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.favIcon}>
          <View style={[styles.favIconChild, styles.rectangle1Position]} />
          <Image
            style={[styles.favIconItem, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group-181291.png")}
          />
        </View>
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
        <Text style={[styles.helloAshfak, styles.textTypo]}>Event Details</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  borderLayout: {
    height: 11,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  dateLayout1: {
    width: 60,
    height: 60,
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  believerPosition: {
    bottom: "1.89%",
    height: "98.11%",
    top: "0%",
    position: "absolute",
  },
  believerTypo: {
    lineHeight: 34,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorTypographyTitle,
    left: "0%",
    position: "absolute",
  },
  iconPosition1: {
    bottom: "0%",
    top: "9.43%",
    height: "90.57%",
    left: "0%",
    position: "absolute",
  },
  childBg: {
    backgroundColor: Color.secondary,
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
  categoriesLayout: {
    width: 390,
    marginTop: 26,
  },
  frameFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  jazzIconPosition: {
    top: "13.64%",
    position: "absolute",
  },
  goingTypo: {
    fontSize: FontSize.size_2xs,
    color: Color.colorTypographySubColor,
    textAlign: "left",
    left: "0%",
    position: "absolute",
  },
  dec1Clr: {
    color: Color.primary,
    position: "absolute",
  },
  storeLayout: {
    height: 110,
    width: 190,
  },
  storeTitleTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  groupChildShadowBox: {
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    position: "absolute",
  },
  iconPosition: {
    height: 40,
    left: 25,
    top: 20,
    width: 40,
    position: "absolute",
  },
  artTypo: {
    lineHeight: 25,
    top: 65,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  rectangleLayout: {
    height: 100,
    width: 90,
  },
  iconChildPosition: {
    borderRadius: Border.br_xs,
    height: "100%",
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  childPosition: {
    backgroundColor: Color.primary,
    left: 0,
    position: "absolute",
  },
  seeAllTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  competitionLayout: {
    height: 178,
    width: 210,
  },
  dateLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  dec1Typo: {
    letterSpacing: 1.2,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  participants25Position: {
    left: 19,
    textAlign: "left",
    position: "absolute",
  },
  logLayout: {
    width: 320,
    height: 60,
  },
  iconSpaceBlock: {
    marginLeft: 15,
    height: 30,
  },
  rectangle1Position: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    left: "0%",
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
  },
  wifiIcon: {
    width: 15,
    height: 13,
  },
  cellularConnectionIcon: {
    width: 16,
    height: 13,
  },
  time: {
    marginTop: -3.5,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    left: 0,
    top: "50%",
    width: 54,
  },
  timeStyle: {
    left: 21,
    height: 21,
    width: 54,
    top: 7,
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "3.06%",
    top: "-0.07%",
    bottom: "97.02%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  pexelsMarkAngelo15879271Icon: {
    height: "17.58%",
    bottom: "82.42%",
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  foralSingingConcert: {
    width: 241,
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    top: 3,
    left: 0,
    position: "absolute",
  },
  dateChild: {
    backgroundColor: Color.linearGradient,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  dec: {
    top: 8,
    left: 15,
    letterSpacing: 1.3,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  text: {
    top: 21,
    left: 17,
    fontSize: 26,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  date: {
    left: 255,
  },
  title: {
    width: 315,
    height: 60,
  },
  believer: {
    opacity: 0.84,
    fontSize: FontSize.size_base,
    top: "0%",
  },
  majorLazerShowtek: {
    top: "65.38%",
    color: Color.colorTypographySubColor,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    left: "0%",
    position: "absolute",
  },
  believerParent: {
    width: "61.73%",
    left: "38.27%",
    right: "0%",
  },
  iconChild: {
    opacity: 0.25,
    borderRadius: Border.br_xs,
    height: "100%",
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  vectorIcon: {
    height: "58.33%",
    width: "58.33%",
    top: "18.75%",
    right: "22.92%",
    bottom: "22.92%",
    left: "18.75%",
    position: "absolute",
  },
  icon: {
    width: "29.63%",
    right: "70.37%",
  },
  dateTime: {
    height: "40.46%",
    width: "79.02%",
    right: "20.98%",
    bottom: "59.54%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  believerGroup: {
    width: "94.15%",
    right: "-24.39%",
    left: "30.24%",
  },
  locationIcon: {
    width: "23.41%",
    right: "76.59%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  location: {
    top: 78,
    height: 53,
    width: 205,
    left: 0,
    position: "absolute",
  },
  details: {
    height: 131,
    marginTop: 26,
    width: 205,
  },
  advertisemntChild: {
    opacity: 0.5,
    backgroundColor: Color.secondary,
    position: "absolute",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  surpriseForYou: {
    width: 136,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "left",
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
    left: 16,
    position: "absolute",
  },
  illustrationIcon: {
    height: "68.53%",
    width: "42.23%",
    top: "15.48%",
    right: "3.39%",
    bottom: "15.98%",
    left: "54.38%",
    position: "absolute",
  },
  advertisemnt: {
    marginTop: 26,
  },
  store2ItemShadowBox: {
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(83, 89, 144, 0.07)",
    height: "100%",
    bottom: "0%",
    borderRadius: Border.br_3xs,
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
  },
  imGoingTo: {
    top: "57.5%",
    fontFamily: FontFamily.poppinsRegular,
    width: "100%",
  },
  imGoingTo1: {
    top: "32.5%",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  storeTitle: {
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    top: "0%",
    left: "0%",
  },
  imGoingToShakeYParent: {
    height: "72.73%",
    width: "50%",
    right: "2.63%",
    bottom: "13.64%",
    left: "47.37%",
  },
  jazzIcon: {
    height: "73.64%",
    width: "36.84%",
    right: "57.89%",
    bottom: "12.73%",
    left: "5.26%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  store2: {
    marginLeft: 10,
  },
  featuredStores1: {
    top: 39,
    left: 0,
  },
  seeAll: {
    left: 280,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 3,
    color: Color.primary,
  },
  featuredStores2: {
    left: 2,
    color: Color.black,
    fontSize: FontSize.size_base,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  featuredStores: {
    height: 149,
  },
  groupChild: {
    backgroundColor: Color.salmon,
    shadowColor: "rgba(46, 46, 79, 0.12)",
    shadowRadius: 20,
    height: 100,
    width: 90,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  icon1: {
    overflow: "hidden",
  },
  sports: {
    left: 26,
  },
  groupItem: {
    backgroundColor: Color.lightsalmon,
    shadowColor: "rgba(46, 46, 79, 0.12)",
    shadowRadius: 20,
    height: 100,
    width: 90,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  groupInner: {
    height: "40%",
    width: "41.33%",
    top: "19.9%",
    right: "29.44%",
    bottom: "40.1%",
    left: "29.23%",
    position: "absolute",
  },
  music: {
    left: 27,
  },
  rectangleGroup: {
    marginLeft: 10,
  },
  rectangleView: {
    backgroundColor: Color.mediumseagreen,
    shadowColor: "rgba(46, 46, 79, 0.12)",
    shadowRadius: 20,
    height: 100,
    width: 90,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  food: {
    left: 31,
  },
  groupChild1: {
    backgroundColor: Color.deepskyblue,
    shadowColor: "rgba(46, 46, 79, 0.12)",
    shadowRadius: 20,
    height: 100,
    width: 90,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  art: {
    left: 36,
  },
  categories2: {
    top: 35,
    left: 0,
  },
  categories: {
    height: 135,
  },
  rectangle: {
    backgroundColor: Color.mediumslateblue,
    position: "absolute",
  },
  bannerChild: {
    height: "116.31%",
    width: "102.44%",
    right: "-3.66%",
    bottom: "-16.31%",
    left: "1.22%",
    top: "0%",
    position: "absolute",
  },
  internationalGalaM: {
    marginTop: -48,
    fontSize: FontSize.size_lg,
    top: "50%",
  },
  madisonAveNew: {
    marginTop: -14,
    width: "83.65%",
    color: Color.slategray_100,
    fontSize: FontSize.size_smi,
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  groupChild2: {
    top: 64,
    borderRadius: Border.br_8xs,
    width: 72,
    height: 32,
  },
  invite: {
    top: 68,
    left: 18,
    lineHeight: 23,
    textTransform: "uppercase",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
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
    marginTop: 26,
  },
  maskGroupIcon: {
    opacity: 0.8,
    left: 0,
    top: 0,
    position: "absolute",
  },
  dateItem: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  dec1: {
    left: 12,
    color: Color.primary,
    position: "absolute",
    textAlign: "left",
    top: 7,
  },
  text1: {
    top: 19,
    fontSize: FontSize.size_xl,
    left: 16,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  date1: {
    top: 15,
    left: 145,
  },
  participants25: {
    top: 121,
    color: Color.gray_600,
    letterSpacing: 1.2,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  competitionTitle: {
    top: 142,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    color: Color.white,
  },
  competition2: {
    marginLeft: 10,
  },
  competitions: {
    width: 430,
    height: 217,
    marginTop: 26,
  },
  logInButtonChild: {
    width: 320,
    height: 60,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  aboutEvent: {
    top: 16,
    left: 106,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  logInButton: {
    marginTop: 26,
  },
  content: {
    height: "81.28%",
    width: "119.44%",
    top: "20.75%",
    right: "-25%",
    bottom: "-2.04%",
    left: "5.56%",
    position: "absolute",
  },
  rectangle1: {
    width: "98.97%",
    right: "1.03%",
    backgroundColor: "#fefeff",
    shadowColor: "rgba(90, 90, 90, 0.05)",
    height: "100%",
    bottom: "0%",
    top: "0%",
    left: "0%",
  },
  image90Icon: {
    height: 30,
    width: 58,
  },
  image91Icon: {
    width: 58,
    marginLeft: 15,
  },
  takedaLogo1Icon: {
    width: 71,
  },
  yexfii4ld2jdbznv1Icon: {
    width: 40,
    marginLeft: 15,
  },
  frame: {
    height: "50%",
    width: "94.44%",
    top: "25%",
    bottom: "25%",
    left: "5.56%",
    right: "0%",
  },
  sponsers: {
    height: "3.47%",
    width: "101.05%",
    top: "15.79%",
    right: "-1.05%",
    bottom: "80.74%",
    left: "0%",
    position: "absolute",
  },
  favIconChild: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: Border.br_3xs,
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  favIconItem: {
    height: "41.38%",
    width: "41.67%",
    top: "29.31%",
    right: "29.02%",
    bottom: "29.31%",
    left: "29.31%",
    position: "absolute",
  },
  favIcon: {
    height: "45%",
    width: "9.6%",
    top: "51.95%",
    right: "5.89%",
    bottom: "3.05%",
    left: "84.51%",
    position: "absolute",
  },
  backIcon: {
    height: "27.5%",
    width: "5.87%",
    top: "61.04%",
    right: "88.29%",
    bottom: "11.46%",
    left: "5.84%",
    position: "absolute",
  },
  helloAshfak: {
    height: "38.75%",
    width: "39.2%",
    top: "55.84%",
    left: "15.18%",
    textAlign: "left",
    fontSize: FontSize.size_lg,
    color: Color.white,
    position: "absolute",
  },
  header: {
    height: "4.45%",
    top: "0.17%",
    bottom: "95.37%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  eventDetail: {
    flex: 1,
    height: 1729,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default EventDetail;
