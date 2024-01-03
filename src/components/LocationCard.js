import { View, Text, Platform, Linking } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import { CalanderIcon, ForwardIcon, LocationIcon } from "../assets/SVG/svg";
import CustomText from "./CustomText";
import { SFCompact } from "../utils/Fonts";

const LocationCard = ({ item }) => {
  const handleMapPress = () => {
    const scheme = Platform.select({
      ios: "maps://0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${item.event_location?.latitude},${item.event_location?.longitude}`;
    const label = `${item.event_location?.address}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };
  function truncateText(text, maxWords) {
    const words = text.split(" ");
    if (words.length > maxWords) {
      const truncatedText = words.slice(0, maxWords).join(" ") + "...";
      return truncatedText;
    } else {
      return text;
    }
  }
  return (
    <TouchableOpacity
      onPress={handleMapPress}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.white,
        padding: 10,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <View>
          <LocationIcon style={{ height: 25, width: 25 }} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <CustomText
            label={
              item.event_location?.venue_name
                ? item.event_location.venue_name
                : ""
            }
            color={"#120D26"}
            fontFamily={SFCompact.light}
            fontSize={17}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <CustomText
                label={truncateText(item.event_location?.neighborhood, 3)}
                color={"#1C1916"}
                fontFamily={SFCompact.light}
                fontSize={13}
              />
            </View>
            <View
              style={{
                height: 5,
                width: 5,
                borderRadius: 100,
                backgroundColor: "#f5f5f5",
                justifyContent: "center",
                marginHorizontal: 10,
              }}
            />
            <View>
              <CustomText
                label={
                  item.event_location?.address
                    ? item.event_location.address
                    : ""
                }
                color={"#1C1916"}
                fontFamily={SFCompact.light}
                fontSize={13}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ForwardIcon style={{ height: 25, width: 25 }} />
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;
