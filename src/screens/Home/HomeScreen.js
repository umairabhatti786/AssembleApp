import {
  View,
  ImageBackground,
  SafeAreaView,
  Text,
  SectionList,
  Image,
  TouchableOpacity,
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
import { colors } from "../../utils/Colors";
import { Modalize } from "react-native-modalize";
import { useFocusEffect } from "@react-navigation/native";
import Card from "../../components/Card";
import { SFCompact } from "../../utils/Fonts";
const HomeScreen = ({ navigation }) => {
  const modalizeRef = useRef(null);
  const [addFavorites, setAddFavorites] = useState(false);
  const onHandlePress = () => {
    navigation.navigate("settings");
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
  const data = [
    {
      title: "Sat , April 17",
      data: [
        {
          key: "1",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Wed , April 14",
          time: "9:00 PM",
          tag1: "Tag1",
          tag3: "Tag3",
          like: false,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "2",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Thursday , April 15",
          time: "9:00 PM",
          tag1: "Tag1",
          tag2: "Tag2",
          like: false,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "3",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Friday , April 16",
          time: "9:00 PM",
          tag2: "Tag2",
          tag3: "Tag3",
          like: true,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "4",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Saturday , April 17",
          time: "9:00 PM",
          tag1: "Tag1",
          tag2: "Tag2",
          like: true,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "5",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Sunday , April 18",
          time: "9:00 PM",
          tag1: "Tag1",
          tag2: "Tag2",
          tag3: "Tag3",
          like: true,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "6",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Monday , April 18",
          time: "9:00 PM",
          tag1: "Tag1",
          tag2: "Tag2",
          tag3: "Tag3",
          like: false,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "7",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Tuesday , April 19",
          time: "9:00 PM",
          tag1: "Tag1",
          tag2: "Tag2",
          tag3: "Tag3",
          like: true,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
      ],
    },
    {
      title: "Upcoming Events",
      data: [
        {
          key: "1",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Wed , April 14",
          time: "9:00 PM",
          tag1: "Tag1",
          tag3: "Tag3",
          like: false,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "2",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Thursday , April 15",
          time: "9:00 PM",
          tag1: "Tag1",
          tag2: "Tag2",
          like: false,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "3",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Friday , April 16",
          time: "9:00 PM",
          tag2: "Tag2",
          tag3: "Tag3",
          like: true,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "4",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Saturday , April 17",
          time: "9:00 PM",
          tag1: "Tag1",
          tag2: "Tag2",
          like: true,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "5",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Sunday , April 18",
          time: "9:00 PM",
          tag1: "Tag1",
          tag2: "Tag2",
          tag3: "Tag3",
          like: true,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "6",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Monday , April 18",
          time: "9:00 PM",
          tag1: "Tag1",
          tag2: "Tag2",
          tag3: "Tag3",
          like: false,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
        {
          key: "7",
          name: "Stake Jazz",
          eventName: "Barrrio Logan",
          img: images.card,
          date: "Tuesday , April 19",
          time: "9:00 PM",
          tag1: "Tag1",
          tag2: "Tag2",
          tag3: "Tag3",
          like: true,
          locationName: "Part Time Lover ",
          locationDetail: {
            pinPoint: "South Park",
            hall: "3222 W Slauson Ave ",
          },
          eventDetail: `Get ready, LA! This Saturday, June 3rd, we're bringing our @fic_studiosessions series to you. We're celebrating our Summer 2023 collection in partnership with @footlocker. Expect an evening of vibrant local music, fashion, and connection. This is more than a pop-up, it's a unique blend of community, style, and rhythm. Let's make it a memorable night of celebrating our shared passion for music and fashion.`,
        },
      ],
    },
  ];
  const renderSectionHeader = ({ section }) => (
    <View style={{ padding: 10 }}>
      <CustomText label={section.title} color={colors.black} fontSize={16} />
    </View>
  );
  const renderItem = ({ section, item }) => (
    <Card item={item} navigation={navigation} />
  );
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
              sections={data}
              keyExtractor={(item, index) => item?.key.toString()}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
            />
          </Modalize>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
