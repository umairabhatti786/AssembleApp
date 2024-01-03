import {
  View,
  ImageBackground,
  SafeAreaView,
  Text,
  SectionList,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useEffect, useRef, useState, useCallback } from "react";
import commonStyles, { PH10 } from "../../utils/CommonStyles";
import { images } from "../../assets/images";
import { styles } from "./styles";
import sizeHelper from "../../assets/helpers/sizeHelper";
import {
  FillHeartIcon,
  HeartIcon,
  ImageIcon,
  LocationGoldenIcon,
  OptionsIcon,
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
import BottomCard from "../../components/BottomCard";
const HomeScreen = ({ navigation }) => {
  const mapRef = useRef(null);
  const modalizeRef = useRef(null);
  const flatListRef = useRef(null);
  const [addFavorites, setAddFavorites] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [eventss, setEventss] = useState([]);
  const [hideModelize, setHideModelize] = useState(false);
  const [prsseLocation, setPrsseLocation] = useState(true);
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const onHandlePress = () => {
    navigation.navigate("settings");
  };
  const openModal = () => {
    modalizeRef.current?.open();
    setHideModelize(false);
  };

  const closeModal = () => {
    modalizeRef.current?.close();
    setHideModelize(true);
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

      if (Array.isArray(response.events) && response.events.length > 0) {
        setEventss(response.events);

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

        const sections = [];
        if (todayEvents.length > 0) {
          sections.push({ title: "Today", data: todayEvents });
        }
        if (upcomingEvents.length > 0) {
          sections.push({ title: "Upcoming Events", data: upcomingEvents });
        }

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
          <HeartIcon onPress={closeModal} style={styles.icon} />
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
  const renderItemBottom = ({ section, item }) => (
    <TouchableOpacity onPress={() => setSelectedEventIndex(index)}>
      <BottomCard item={item} navigation={navigation} />
    </TouchableOpacity>
  );
  const footerComponent = () => {
    return (
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        source={images.background}
      >
        <View
          style={{
            backgroundColor: colors.white,
            height: 300,
            width: 370,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginVertical: 20,
          }}
        >
          <View style={{ marginVertical: 10 }}>
            <CustomText
              label={"Don't see the event you're \nlooking for? "}
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
        </View>
      </ImageBackground>
    );
  };

  const CustomMarkerComponent = ({ event }) => {
    <TouchableOpacity
      // onPress={() => {
      //   mapRef.current.animateToRegion(
      //     {
      //       latitude: event.event_location?.latitude,
      //       longitude: event.event_location?.longitude,
      //       latitudeDelta: 1,
      //       longitudeDelta: 1,
      //     },
      //     2000
      //   );
      //   modalizeRef.current?.close();
      // }}
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        height: 100,
        width: 100,
      }}
    >
      {/* <Image
        source={images.goldenLocation}
        style={{ height: 80, width: 80 }}
        resizeMode="contain"
      /> */}
      <Text>{event.eventName}</Text>
    </TouchableOpacity>;
  };
  const onViewableItemsChanged = ({ viewableItems, changed }) => {
    console.log("Visible items are", viewableItems);
    console.log("Changed in this iteration", changed);
  };
  // const onViewableItemsChanged = useCallback(({ viewableItems }) => {
  //   // Update the selected event index when the visible item changes
  //   if (viewableItems.length > 0) {
  //     const newIndex = viewableItems[0].index;
  //     setSelectedEventIndex(newIndex);
  //     updateMapCenter(newIndex);
  //   }
  // }, []);

  const updateMapCenter = (index) => {
    // Update the map center based on the latitude and longitude of the selected event
    const selectedEvent = eventss[index];
    if (selectedEvent && selectedEvent.event_location) {
      const { latitude, longitude } = selectedEvent.event_location;
      mapRef.current.animateToRegion(
        {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        500
      );
    }
  };
  const onScroll = (x) => {
    const xPos =
      x.nativeEvent?.contentOffset?.x < 0 ? 0 : x.nativeEvent?.contentOffset?.x;
    const current = Math.floor(xPos / 260);

    setSelectedEventIndex(current);
  };
  console.log("selectedEventIndex", selectedEventIndex);
  return (
    <>
      <Header />

      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={mapRef}
          style={styles.map}
          // initialRegion={{
          //   latitude: 24.8607,
          //   longitude: 67.0011,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // }}
          // onRegionChangeComplete={(region) => setRegion(region)}
        >
          {eventss.length > 0 &&
            eventss.map((event) => (
              <Marker
                key={event._id}
                coordinate={{
                  latitude: event.event_location?.latitude || 24.8607,
                  longitude: event.event_location?.longitude || 67.0011,
                }}
                title={event.title}
                description={event.description}
              >
                {/* You can customize the Marker by providing a custom component */}
                <CustomMarkerComponent event={event} />
              </Marker>
            ))}
        </MapView>
        {hideModelize === false && (
          <Modalize
            modalStyle={{
              backgroundColor: "#FFFFFF",
              flex: 1,
              // position: "absolute",
              width: "100%",
            }}
            ref={modalizeRef}
            alwaysOpen={sizeHelper.screenWidth > 450 ? 550 : 490}
            useNativeDriver={true}
            modalHeight={700}
            handlePosition="inside"
            panGestureComponentProps={{ enabled: true }}
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
        )}

        {hideModelize && (
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <View style={{ backgroundColor: "transparent", padding: 10 }}>
                <OptionsIcon
                  onPress={() => {
                    modalizeRef.current?.open();
                    setHideModelize(false);
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                  }}
                  fill={"transparent"}
                />
              </View>
              <View
                style={{
                  backgroundColor: "#f5f0f0",
                  padding: 5,
                  borderRadius: 100,
                }}
              >
                <OptionsIcon
                  onPress={() => {
                    modalizeRef.current?.open();
                    setHideModelize(false);
                  }}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                  }}
                  fill={colors.black}
                />
              </View>
            </View>

            <View>
              <FlatList
                ref={flatListRef}
                data={eventss}
                keyExtractor={(item, index) => item?._id.toString()}
                renderItem={renderItemBottom}
                horizontal={true}
                onViewableItemsChanged={onViewableItemsChanged}
                onScroll={onScroll}
                viewabilityConfig={{
                  itemVisiblePercentThreshold: 50,
                }}
              />
            </View>
          </View>
        )}
      </View>
      {loading && (
        <View style={[styles.popupContainer, { zIndex: 99999 }]}>
          <Loading />
        </View>
      )}
    </>
  );
};

export default HomeScreen;
