import {
  View,
  ImageBackground,
  SafeAreaView,
  Text,
  SectionList,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import commonStyles, { PH10 } from "../../utils/CommonStyles";
import { images } from "../../assets/images";
import { styles } from "./styles";
import sizeHelper from "../../assets/helpers/sizeHelper";
import {
  FillHeartIcon,
  HeartIcon,
  ImageIcon,
  ProfileIcon,
  UnFillHeartIcon,
} from "../../assets/SVG/svg";
import CustomText from "../../components/CustomText";
import { colors } from "../../utils/colors";
import { Modalize } from "react-native-modalize";
import { useFocusEffect } from "@react-navigation/native";
import Card from "../../components/Card";
import { SFCompact } from "../../utils/Fonts";
import Loading from "../../components/Loading";
import { Get_All_Events } from "../../api/Requests";
import Button from "../../components/Button";
const HomeScreen = ({ navigation }) => {
  const modalizeRef = useRef(null);
  const [addFavorites, setAddFavorites] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const onHandlePress = () => {
    navigation.navigate("settings");
  };
  useFocusEffect(
    React.useCallback(() => {
      fetchAllEvents();
    }, [])
  );
  const fetchAllEvents = async () => {
    setLoading(true);
    try {
      let response = await Get_All_Events();
      // console.log("response:", response);

      if (Array.isArray(response.events) && response.events.length > 0) {
        // Categorize events based on date
        const currentDate = new Date();
        const upcomingEvents = [];
        const todayEvents = [];

        response.events.forEach((event) => {
          const eventDate = new Date(event.event_date);
          if (eventDate.toDateString() === currentDate.toDateString()) {
            todayEvents.push(event);
          } else {
            upcomingEvents.push(event);
          }
        });

        // Create the data structure for SectionList
        const sections = [];
        if (todayEvents.length > 0) {
          sections.push({ title: "Today", data: todayEvents });
        }
        if (upcomingEvents.length > 0) {
          sections.push({ title: "Upcoming Events", data: upcomingEvents });
        }

        // Set the events state
        setEvents(sections);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const openExternalLink = async () => {
    const url = "https://w3dv4qeze3p.typeform.com/to/BCoUhmwU";
    await Linking.openURL(url);
  };
  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <ProfileIcon onPress={onHandlePress} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <CustomText
            color={colors.black}
            fontSize={16}
            alignSelf="center"
            textAlign="center"
            label="assemble"
            fontFamily={SFCompact.semiBold}
          />
        </View>
        <View style={styles.iconContainer}>
          <HeartIcon style={styles.icon} />
        </View>
      </View>
    );
  };

  const renderSectionHeader = ({ section }) => (
    <View style={{ padding: 10 }}>
      <CustomText label={section.title} color={colors.black} fontSize={16} />
    </View>
  );
  const renderItem = ({ section, item }) => (
    <Card item={item} navigation={navigation} />
  );
  const footerComponent = () => {
    return (
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          // top: -5,
          // zIndex: -1000,
        }}
        source={images.background}
      >
        <View
          style={{
            backgroundColor: "#D9D9D9",
            height: 200,
            width: 370,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginVertical: 20,
          }}
        >
          <View style={{ marginVertical: 10 }}>
            <ImageIcon style={styles.iconImage} />
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <CustomText
            label={"Know of an event in need \nof some hype? "}
            color={colors.black}
            fontSize={17}
            alignSelf="center"
            textAlign="center"
            fontFamily={SFCompact.regular}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <CustomText
            label={"Send it our way and we will \n add to  the list"}
            color={colors.black}
            fontSize={13}
            alignSelf="center"
            textAlign="center"
            fontFamily={SFCompact.light}
          />
        </View>
        <>
          <Button
            text={"SUBMIT EVENT"}
            color={colors.white}
            fontSize={14}
            height={65}
            width={"50%"}
            backgroundColor={colors.black}
            borderRadius={100}
            margin={20}
            fontFamily={SFCompact.regular}
            onPress={openExternalLink}
          />
        </>
      </ImageBackground>
    );
  };

  return (
    <SafeAreaView style={commonStyles.main}>
      <ImageBackground style={styles.main} source={images.background}>
        <Header />
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#D9D9D9",
              height: 270,
              width: 370,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <View style={{ marginVertical: 10 }}>
              <ImageIcon style={styles.iconImage} />
            </View>
            <View style={{ marginVertical: 10 }}>
              <CustomText
                label={"Place holder for image or \n animation"}
                color={colors.black}
                fontSize={16}
                alignSelf="center"
                textAlign="center"
                fontFamily={SFCompact.regular}
              />
            </View>
          </View>
          <Modalize
            modalStyle={{ backgroundColor: "#FFFFFF", flex: 1 }}
            ref={modalizeRef}
            alwaysOpen={sizeHelper.screenWidth > 450 ? 550 : 490}
            useNativeDriver={true}
            modalHeight={700}
            handlePosition="inside"
            panGestureComponentProps={{ enabled: false }}
          >
            <View style={styles.content}>
              <CustomText
                label="Events in San Diego"
                color={colors.black}
                fontSize={16}
                alignSelf="center"
                textAlign="center"
                fontFamily={SFCompact.semiBold}
              />
            </View>
            <SectionList
              sections={events}
              keyExtractor={(item, index) => item?._id.toString()}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
              ListFooterComponent={loading ? null : footerComponent}
            />
          </Modalize>
        </View>
      </ImageBackground>
      {loading && (
        <View style={[styles.popupContainer, { zIndex: 99999 }]}>
          <Loading />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
