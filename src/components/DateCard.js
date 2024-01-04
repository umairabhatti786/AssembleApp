import { View, Text, Platform, Alert, Linking } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import { CalanderIcon, ForwardIcon } from "../assets/SVG/svg";
import CustomText from "./CustomText";
import { SFCompact } from "../utils/Fonts";
import { request, PERMISSIONS, check, RESULTS } from "react-native-permissions";
import RNCalendarEvents from "react-native-calendar-events";
const DateCard = ({ item }) => {
  const formatDate = (dateString) => {
    const options = { weekday: "short", month: "short", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };
  const requestCalendarPermission = async () => {
    try {
      const result = await RNCalendarEvents.requestPermissions();

      if (result === "authorized") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error requesting calendar permission:", error);
      return false;
    }
  };

  const addEventToCalendar = async () => {
    try {
      const hasPermission = await requestCalendarPermission();

      if (hasPermission) {
        // You can customize the event details here
        const eventDetails = {
          title: "Meeting",
          location: "Office",
          startDate: "2024-01-05T09:00:00.000Z", // String format
          endDate: "2024-01-08T09:00:00.000Z", // String format
        };

        const eventId = await RNCalendarEvents.saveEvent("New Event", {
          startDate: "2024-01-05T09:00:00.000Z",
          recurrenceRule: {
            frequency: "weekly",
            occurrence: 52,
            interval: 2,
            endDate: "2024-01-08T09:00:00.000Z",
          },
        });
        Alert.alert(
          "Event Added",
          "The event has been added to your calendar. To view the event, open your calendar app.",
          [
            {
              text: "OK",
              onPress: () => {
                // Open the calendar app using Linking
                const calendarAppUrl =
                  Platform.OS === "ios"
                    ? "calshow:" // iOS
                    : "content://com.android.calendar/time/"; // Android

                Linking.openURL(calendarAppUrl);
              },
            },
          ],
          { cancelable: false }
        );

        console.log("Event added successfully. Event ID:", eventId);
      } else {
        console.log("Calendar permission not granted");
      }
    } catch (error) {
      console.error("Error adding event to calendar:", error);
    }
  };
  return (
    <TouchableOpacity
      onPress={addEventToCalendar}
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
          <CalanderIcon style={{ height: 25, width: 25 }} fill={"#cfb34e"} />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <CustomText
            label={formatDate(item.event_date) + " , " + item.event_time}
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
