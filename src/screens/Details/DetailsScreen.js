import {
  View,
  ImageBackground,
  SafeAreaView,
  Text,
  SectionList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import commonStyles, { PH10 } from "../../utils/CommonStyles";
import { images } from "../../assets/images";
import { styles } from "./styles";
import sizeHelper from "../../assets/helpers/sizeHelper";
import CustomText from "../../components/CustomText";
import { colors } from "../../utils/colors";
import Button from "../../components/Button";
import { SFCompact } from "../../utils/Fonts";
import {
  BackIcon,
  CalanderIcon,
  CrossIcon,
  ForwardIcon,
  HeartIcon,
  UnFillHeartIcon,
  UploadIcon,
} from "../../assets/SVG/svg";
import DateCard from "../../components/DateCard";
import LocationCard from "../../components/LocationCard";
import MapComponent from "../../components/MapComponent";
const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  const latitude = 37.7749; // Replace with your latitude
  const longitude = -122.4194; // Replace with your longitude
  const iosLink = "http://maps.apple.com/?ll=37.7749,-122.4194";
  const handleGoBack = () => {
    navigation.goBack();
  };
  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={[styles.iconContainer, , { marginHorizontal: 8 }]}>
          <BackIcon
            onPress={handleGoBack}
            style={styles.icon}
            fill={colors.black}
          />
        </View>
        <View style={styles.textContainer}>
          <CustomText
            color={"transparent"}
            fontSize={16}
            alignSelf="center"
            textAlign="center"
            label="assemble"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.iconContainer}>
            <UnFillHeartIcon style={styles.icon} fill={colors.black} />
          </View>
          <View style={[styles.iconContainer, { marginHorizontal: 10 }]}>
            <UploadIcon style={styles.icon} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={commonStyles.main}>
      <ScrollView
        contentContainerStyle={
          {
            // alignItems: "center",
          }
        }
        style={{
          flex: 1,
          backgroundColor: colors.white,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            // marginVertical: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              marginHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <ImageBackground
              style={styles.flex}
              source={images.details}
              imageStyle={{ borderRadius: 20, height: 300, width: "100%" }}
              resizeMode="cover"
            >
              <Header />
              <View
                style={{
                  top: 150,
                  left: 10,
                  right: 0,
                }}
              >
                <View style={styles.tagsContainer}>
                  {item.tag1 && (
                    <View style={styles.tagBody}>
                      <View style={{ padding: 5 }}>
                        <Text style={styles.tagName}>{item.tag1}</Text>
                      </View>
                    </View>
                  )}

                  {item.tag2 && (
                    <View style={styles.tagBody}>
                      <View style={{ padding: 5 }}>
                        <Text style={styles.tagName}>{item.tag2}</Text>
                      </View>
                    </View>
                  )}
                  {item.tag3 && (
                    <View style={styles.tagBody}>
                      <View style={{ padding: 5 }}>
                        <Text style={styles.tagName}>{item.tag3}</Text>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ padding: 20, width: "100%" }}>
            <CustomText
              label={item.name}
              fontSize={16}
              color={colors.black}
              fontFamily={SFCompact.regular}
            />
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              backgroundColor: colors.white,
              padding: 20,
            }}
          >
            <DateCard item={item} />
            <View
              style={{
                height: 1,
                backgroundColor: "#F0EBD9",
                marginHorizontal: 20,
                borderWidth: 0.5,
                marginVertical: 10,
                borderColor: "#F0EBD9",
                width: 350,
              }}
            />
            <LocationCard item={item} />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            backgroundColor: colors.white,
            padding: 20,
          }}
        >
          <CustomText
            label="Event Detail"
            fontFamily={SFCompact.semiBold}
            fontSize={15}
          />
          <View>
            <CustomText
              label={item.eventDetail}
              fontFamily={SFCompact.light}
              fontSize={15}
            />
          </View>
          <View style={{ height: 300, width: 400 }}>
            <MapComponent latitude={latitude} longitude={longitude} />
          </View>
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailsScreen;
