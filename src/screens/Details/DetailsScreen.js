import {
  View,
  ImageBackground,
  SafeAreaView,
  Text,
  SectionList,
  Image,
  TouchableOpacity,
  ScrollView,
  Share,
  Alert,
  Linking,
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
import { useFocusEffect } from "@react-navigation/native";
import Loading from "../../components/Loading";
import { Get_Single_Event } from "../../api/Requests";
const DetailsScreen = ({ navigation, route }) => {
  const eventID = route.params?.eventId;
  const [eventDetail, setEventDetails] = useState({});
  const latitude = 37.7749; // Replace with your latitude
  const longitude = -122.4194; // Replace with your longitude
  const [loading, setLoading] = useState(false);
  const handleGoBack = () => {
    navigation.goBack();
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const openExternalLink = async () => {
    const url = eventDetail.ticket_link;
    await Linking.openURL(url);
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchEventsDetails(eventID);
    }, [route.params?.eventId])
  );
  const fetchEventsDetails = async (eventID) => {
    setLoading(true);
    try {
      let response = await Get_Single_Event(eventID);

      if (response.event !== undefined) {
        setEventDetails(response.event);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
            <UploadIcon onPress={onShare} style={styles.icon} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={commonStyles.main}>
      <ScrollView
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
                  {Array.isArray(eventDetail.event_tags) &&
                    eventDetail.event_tags.length > 0 &&
                    eventDetail.event_tags[0].split(",").map((tag) => (
                      <ImageBackground
                        key={tag} // Add a unique key for each tag
                        style={styles.tagBody}
                        source={images.smallBox}
                        imageStyle={{ borderRadius: 50 }}
                      >
                        <View style={{ padding: 5 }}>
                          <Text style={styles.tagName}>{tag}</Text>
                        </View>
                      </ImageBackground>
                    ))}
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ padding: 20, width: "100%" }}>
            <CustomText
              label={eventDetail.event_title}
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
            <DateCard item={eventDetail} />
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
            <LocationCard item={eventDetail} />
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
              label={eventDetail.event_description}
              fontFamily={SFCompact.light}
              fontSize={15}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#F8F8F8",
              justifyContent: "center",
              // alignItems: "center",
              borderRadius: 20,
            }}
          >
            <View
              style={{
                height: 400,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <MapComponent
                latitude={eventDetail?.event_location?.latitude}
                longitude={eventDetail?.event_location?.longitude}
                address={eventDetail?.event_location?.address}
              />
            </View>

            <CustomText
              label={
                eventDetail?.event_location?.address
                  ? eventDetail?.event_location?.address
                  : ""
              }
              color="#1C1916"
              fontFamily={SFCompact.light}
              fontSize={13}
              textAlign="center"
              alignSelf="center"
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button
              text={"GET TICKETS"}
              color={colors.white}
              fontSize={17}
              height={65}
              width={"100%"}
              backgroundColor={"#080808"}
              borderRadius={100}
              margin={20}
              fontFamily={SFCompact.semiBold}
              onPress={openExternalLink}
            />
          </View>
        </View>
      </ScrollView>
      {loading && (
        <View style={[styles.popupContainer, { zIndex: 99999 }]}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default DetailsScreen;
