import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Sidebar = () => {
  return (
    <View style={styles.sidebar}>
      <View style={styles.iconMenuParent}>
        <Image
          style={[styles.iconMenu, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/-icon-menu.png")}
        />
        <Text style={[styles.upcomingEvents, styles.categoriesTypo]}>
          Upcoming Events
        </Text>
        <Text style={[styles.categories, styles.categoriesTypo]}>
          Categories
        </Text>
        <Text style={styles.seeAll}>See All</Text>
        <View style={styles.rectangleParent}>
          <View style={styles.rectangle} />
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/group-336501.png")}
          />
          <View style={styles.internationalGalaMParent}>
            <Text style={[styles.internationalGalaM, styles.clubRoadUsaTypo]}>
              Invite your friends
            </Text>
            <Text style={styles.madisonAveNew}>Get $20 for ticket</Text>
            <View style={[styles.groupItem, styles.itemPosition]} />
            <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
          </View>
        </View>
        <View style={styles.rectangleGroup}>
          <View style={styles.groupInner} />
          <Image
            style={[styles.iconSearch, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-icon-search.png")}
          />
          <Text style={[styles.findForFood, styles.findForFoodTypo]}>
            Find for food or restaurant...
          </Text>
        </View>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4158.png")}
        />
        <View style={[styles.latestEvent, styles.latestEventPosition]}>
          <View style={styles.eventLayout}>
            <View style={styles.childShadowBox} />
            <View style={[styles.image, styles.imageLayout]}>
              <View style={[styles.imageChild, styles.imageLayout]} />
              <Image
                style={[styles.maskGroupIcon, styles.imageLayout]}
                contentFit="cover"
                source={require("../assets/mask-group3.png")}
              />
              <View
                style={[styles.rectangleContainer, styles.groupViewPosition]}
              >
                <View
                  style={[styles.rectangleView, styles.groupChild1Position]}
                />
                <Image
                  style={[styles.groupIcon, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/group-181292.png")}
                />
              </View>
              <View style={[styles.groupView, styles.groupLayout]}>
                <View style={[styles.groupChild1, styles.groupLayout]} />
                <Text style={styles.armanRokni}>
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
                style={[styles.foralSingingInternation, styles.findForFoodTypo]}
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
            <View style={styles.childShadowBox} />
            <Image
              style={[styles.image, styles.imageLayout]}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
            <View
              style={[styles.rectangleParent1, styles.rectangleParentPosition]}
            >
              <View
                style={[styles.rectangleView, styles.groupChild1Position]}
              />
              <Image
                style={[styles.groupIcon, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/group-181292.png")}
              />
            </View>
            <View
              style={[styles.rectangleParent2, styles.rectangleParentPosition]}
            >
              <View style={[styles.groupChild1, styles.groupLayout]} />
              <Text style={styles.armanRokni}>
                <Text style={styles.armanRokniTxtContainer}>
                  <Text style={styles.text}>{`10
`}</Text>
                  <Text style={styles.june}>JAN</Text>
                </Text>
              </Text>
            </View>
            <View style={styles.text1}>
              <Text
                style={[styles.foralSingingInternation, styles.findForFoodTypo]}
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
        <View style={[styles.groupParent, styles.latestEventPosition]}>
          <View style={styles.rectangleParentLayout}>
            <View style={[styles.groupChild5, styles.groupChildShadowBox]} />
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/24761541.png")}
            />
            <Text style={[styles.sports, styles.artTypo]}>Sports</Text>
          </View>
          <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
            <View style={[styles.groupChild6, styles.groupChildShadowBox]} />
            <Image
              style={[styles.groupChild7, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/group-182151.png")}
            />
            <Text style={[styles.music, styles.artTypo]}>Music</Text>
          </View>
          <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
            <View style={[styles.groupChild8, styles.groupChildShadowBox]} />
            <Image
              style={[styles.icon1, styles.icon1Position]}
              contentFit="cover"
              source={require("../assets/6853521.png")}
            />
            <Text style={[styles.food, styles.artTypo]}>Food</Text>
          </View>
          <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
            <View style={[styles.groupChild9, styles.groupChildShadowBox]} />
            <Image
              style={styles.icon1Position}
              contentFit="cover"
              source={require("../assets/group-182161.png")}
            />
            <Text style={[styles.art, styles.artTypo]}>Art</Text>
          </View>
        </View>
      </View>
      <View style={styles.sidebarChild} />
      <View style={[styles.sidebarItem, styles.itemPosition]} />
      <Image
        style={[styles.iconCross, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/-icon-cross.png")}
      />
      <View style={styles.abdulShakoorParent}>
        <Text style={[styles.abdulShakoor, styles.inviteTypo]}>
          Abdul Shakoor
        </Text>
        <Image
          style={[styles.groupChild11, styles.groupChild11Position]}
          contentFit="cover"
          source={require("../assets/rectangle-41581.png")}
        />
      </View>
      <View style={styles.groupContainer}>
        <View style={styles.myProfileParent}>
          <Text style={[styles.myProfile, styles.artTypo]}>My Profile</Text>
          <Image
            style={[styles.groupChild12, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-18835.png")}
          />
        </View>
        <View style={[styles.favoritesParent, styles.parentSpaceBlock]}>
          <Text style={[styles.myProfile, styles.artTypo]}>Favorites</Text>
          <Image
            style={[styles.groupChild12, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-18859.png")}
          />
        </View>
        <View style={[styles.contactUsParent, styles.parentSpaceBlock]}>
          <Text style={[styles.myProfile, styles.artTypo]}>Contact Us</Text>
          <Image
            style={[styles.groupChild14, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-18832.png")}
          />
        </View>
        <View style={[styles.logOutParent, styles.parentSpaceBlock]}>
          <Text style={[styles.myProfile, styles.artTypo]}>Log Out</Text>
          <Image
            style={[styles.groupChild15, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/group-18861.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  categoriesTypo: {
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  clubRoadUsaTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  itemPosition: {
    backgroundColor: Color.primary,
    left: 0,
    position: "absolute",
  },
  inviteTypo: {
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    width: "6.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  findForFoodTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout: {
    height: 30,
    width: 30,
  },
  latestEventPosition: {
    flexDirection: "row",
    left: 4,
    position: "absolute",
  },
  imageLayout: {
    height: 131,
    width: 218,
    position: "absolute",
  },
  groupViewPosition: {
    top: 6,
    position: "absolute",
  },
  groupChild1Position: {
    backgroundColor: Color.gray_500,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 45,
    width: 45,
  },
  eventLayout: {
    height: 212,
    width: 237,
  },
  rectangleParentPosition: {
    top: 15,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowColor: "rgba(46, 46, 79, 0.12)",
    height: 100,
    width: 90,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    top: 0,
    left: 0,
    position: "absolute",
  },
  artTypo: {
    lineHeight: 25,
    color: Color.white,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 100,
    width: 90,
  },
  icon1Position: {
    left: 21,
    width: 50,
    top: 15,
    height: 50,
    position: "absolute",
  },
  groupChild11Position: {
    borderRadius: Border.br_11xl,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 23,
    width: 23,
    left: 0,
    position: "absolute",
  },
  parentSpaceBlock: {
    marginTop: 33,
    height: 25,
  },
  iconMenu: {
    height: "2.6%",
    width: "5.53%",
    top: "0.84%",
    right: "93.85%",
    bottom: "96.56%",
    left: "0.61%",
  },
  upcomingEvents: {
    top: 276,
    textAlign: "left",
    color: Color.black,
    left: 4,
    fontWeight: "600",
  },
  categories: {
    top: 117,
    left: 6,
    textAlign: "left",
    color: Color.black,
  },
  seeAll: {
    top: 279,
    left: 284,
    textAlign: "right",
    color: Color.primary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    right: "0%",
    backgroundColor: Color.mediumslateblue,
    borderRadius: Border.br_xs,
    top: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    height: "116.31%",
    width: "104.88%",
    right: "-4.88%",
    bottom: "-16.31%",
    top: "0%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  internationalGalaM: {
    marginTop: -48,
    lineHeight: 34,
    color: Color.colorTypographyTitle,
    fontSize: FontSize.size_lg,
    top: "50%",
    left: "0%",
  },
  madisonAveNew: {
    marginTop: -14,
    width: "83.65%",
    fontSize: FontSize.size_smi,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.slategray_100,
    top: "50%",
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
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
    color: Color.white,
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
  rectangleParent: {
    height: "19.64%",
    width: "67.21%",
    top: "80.36%",
    right: "32.79%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  groupInner: {
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
      height: 10,
    },
    top: 0,
    height: 50,
    width: 320,
    left: 0,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  iconSearch: {
    height: "40%",
    top: "32%",
    right: "7.5%",
    bottom: "28%",
    left: "86.25%",
  },
  findForFood: {
    top: "30%",
    left: "6.25%",
    color: Color.slategray_200,
  },
  rectangleGroup: {
    top: 55,
    height: 50,
    width: 320,
    left: 4,
    position: "absolute",
  },
  rectangleIcon: {
    left: 294,
    borderRadius: Border.br_11xl,
    top: 0,
    position: "absolute",
  },
  childShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_mini,
    height: 212,
    width: 237,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  imageChild: {
    backgroundColor: Color.khaki,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  maskGroupIcon: {
    top: 0,
    left: 0,
  },
  rectangleView: {
    borderRadius: Border.br_6xs,
    height: 30,
    width: 30,
  },
  groupIcon: {
    height: "46.67%",
    width: "46.99%",
    top: "26.67%",
    right: "26.34%",
    bottom: "26.67%",
    left: "26.67%",
  },
  rectangleContainer: {
    left: 180,
    height: 30,
    width: 30,
  },
  groupChild1: {
    backgroundColor: Color.gray_500,
    top: 0,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  text: {
    lineHeight: 6,
    fontSize: FontSize.size_lg,
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
    left: "13.33%",
    display: "flex",
    alignItems: "center",
    height: 27,
    textAlign: "center",
    textTransform: "uppercase",
    top: "50%",
    color: Color.primary,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  groupView: {
    left: 8,
    top: 6,
    position: "absolute",
  },
  image: {
    top: 9,
    left: 9,
  },
  foralSingingInternation: {
    top: 0,
    left: 0,
    color: Color.black,
  },
  clubRoadUsa: {
    top: 26,
    left: 17,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
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
  rectangleParent1: {
    left: 189,
    height: 30,
    width: 30,
  },
  rectangleParent2: {
    left: 17,
    height: 45,
    width: 45,
  },
  event2: {
    marginLeft: 10,
  },
  latestEvent: {
    top: 323,
  },
  groupChild5: {
    backgroundColor: Color.salmon,
  },
  icon: {
    left: 20,
    width: 50,
    top: 15,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  sports: {
    left: 26,
    top: 65,
    lineHeight: 25,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  groupChild6: {
    backgroundColor: Color.lightsalmon,
  },
  groupChild7: {
    height: "50%",
    width: "51.67%",
    top: "14.9%",
    right: "25.77%",
    bottom: "35.1%",
    left: "22.56%",
  },
  music: {
    left: 27,
    top: 65,
    lineHeight: 25,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  rectangleParent4: {
    marginLeft: 10,
  },
  groupChild8: {
    backgroundColor: Color.mediumseagreen,
  },
  icon1: {
    overflow: "hidden",
  },
  food: {
    left: 31,
    top: 65,
    lineHeight: 25,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  groupChild9: {
    backgroundColor: Color.deepskyblue,
  },
  art: {
    left: 36,
    top: 65,
    lineHeight: 25,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  groupParent: {
    top: 152,
  },
  iconMenuParent: {
    height: "89.75%",
    width: "135.56%",
    top: "4.38%",
    right: "-40%",
    bottom: "5.88%",
    left: "4.44%",
    position: "absolute",
  },
  sidebarChild: {
    top: -6,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    width: 363,
    height: 806,
    left: 0,
    position: "absolute",
  },
  sidebarItem: {
    width: 257,
    top: 0,
    height: 800,
  },
  iconCross: {
    height: "2.13%",
    width: "4.72%",
    top: "3%",
    right: "35.28%",
    bottom: "94.88%",
    left: "60%",
  },
  abdulShakoor: {
    top: "73.33%",
    textTransform: "capitalize",
    left: "0%",
    fontSize: FontSize.size_base,
  },
  groupChild11: {
    left: 29,
    width: 60,
    height: 60,
  },
  abdulShakoorParent: {
    height: "11.25%",
    width: "32.78%",
    top: "6.75%",
    right: "47.78%",
    bottom: "82%",
    left: "19.44%",
    position: "absolute",
  },
  myProfile: {
    left: 37,
    top: 0,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  groupChild12: {
    top: 1,
  },
  myProfileParent: {
    width: 115,
    height: 25,
  },
  favoritesParent: {
    width: 111,
  },
  groupChild14: {
    height: "92%",
    width: "18.11%",
    top: "4%",
    right: "81.89%",
    bottom: "4%",
    left: "0%",
  },
  contactUsParent: {
    width: 127,
  },
  groupChild15: {
    top: 0,
  },
  logOutParent: {
    width: 99,
  },
  groupContainer: {
    top: 189,
    left: 30,
    position: "absolute",
  },
  sidebar: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Sidebar;
