import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../utils/Colors";
import { CalanderIcon, ForwardIcon } from "../assets/SVG/svg";
import CustomText from "./CustomText";
import { SFCompact } from "../utils/Fonts";

const DateCard = ({ item }) => {
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
          <CalanderIcon style={{ height: 25, width: 25 }} fill={"#cfb34e"} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <CustomText
            label={item.date + " , " + item.time}
            color={"#1C1916"}
            fontFamily={SFCompact.light}
            fontSize={17}
          />
        </View>
      </View>
      <View
        style={{
          // marginHorizontal: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ForwardIcon style={{ height: 25, width: 25 }} />
      </View>
    </TouchableOpacity>
  );
};

export default DateCard;
