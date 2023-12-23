import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import { CalanderIcon, ForwardIcon, LocationIcon } from "../assets/SVG/svg";
import CustomText from "./CustomText";
import { SFCompact } from "../utils/Fonts";

const LocationCard = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.white,
        padding: 10,
        width: 400,
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
            label={item.locationName}
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
                label={item.locationDetail?.pinPoint}
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
                label={item.locationDetail?.hall}
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
