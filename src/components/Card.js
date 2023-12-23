import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { colors } from "../utils/Colors";
import { images } from "../assets/images";
import { FillHeartIcon, UnFillHeartIcon } from "../assets/SVG/svg";
import CustomText from "./CustomText";
import { SFCompact } from "../utils/Fonts";

const Card = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("details", item);
      }}
      style={styles.cardMain}
    >
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.img} resizeMode="contain" style={styles.img} />
        </View>
        <View style={styles.centerContainer}>
          <Text style={styles.name}>{item.name}</Text>

          <View style={styles.eventContainer}>
            <Text style={styles.eventName}>{item.eventName}</Text>
            <View style={styles.div} />

            <Text style={styles.date}>{item.date}</Text>
          </View>
          <View style={styles.tagsContainer}>
            {item.tag1 && (
              <ImageBackground
                style={styles.tagBody}
                source={images.smallBox}
                imageStyle={{ borderRadius: 50 }}
              >
                <View style={{ padding: 5 }}>
                  <Text style={styles.tagName}>{item.tag1}</Text>
                </View>
              </ImageBackground>
            )}

            {item.tag2 && (
              <ImageBackground
                style={styles.tagBody}
                source={images.smallBox}
                imageStyle={{ borderRadius: 50 }}
              >
                <View style={{ padding: 5 }}>
                  <Text style={styles.tagName}>{item.tag2}</Text>
                </View>
              </ImageBackground>
            )}
            {item.tag3 && (
              <ImageBackground
                style={styles.tagBody}
                source={images.smallBox}
                imageStyle={{ borderRadius: 50 }}
              >
                <View style={{ padding: 5 }}>
                  <Text style={styles.tagName}>{item.tag3}</Text>
                </View>
              </ImageBackground>
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.heartContainer}>
          {item.like === true ? (
            <FillHeartIcon style={styles.fillIcon} />
          ) : (
            <UnFillHeartIcon style={styles.fillIcon} fill="#cfb34e" />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardMain: { marginHorizontal: 10 },
  cardContainer: {
    backgroundColor: "#f5f0f0",
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 10,
    marginVertical: 5,
  },
  imageContainer: { width: "20%" },
  img: { height: 100, width: 80 },
  centerContainer: { width: "70%" },
  name: {
    fontSize: 16,
    //   fontWeight: '700',
    color: colors.black,
    marginHorizontal: 5,
    // textShadowColor: 'rgba(0, 0, 0, 0.65)',
    // textShadowOffset: {width: 2, height: 2},
    // textShadowRadius: 3,
    fontFamily: SFCompact.bold,
  },
  eventContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  eventName: {
    fontSize: 14,

    color: colors.black,
    marginHorizontal: 5,
    fontFamily: SFCompact.regular,
  },
  div: {
    height: 5,
    width: 5,
    borderRadius: 100,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  date: {
    fontSize: 14,

    color: colors.black,
    marginHorizontal: 5,
    fontFamily: SFCompact.regular,
  },
  tagsContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    marginHorizontal: 5,
  },
  tagBody: {
    marginHorizontal: 10,
    height: 30,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  tagName: {
    fontSize: 12,

    color: colors.black,
    fontFamily: SFCompact.regular,
  },
  heartContainer: {
    width: "8%",
    justifyContent: "center",
    alignItems: "center",
  },
  fillIcon: { height: 24, width: 24 },
});
export default Card;
