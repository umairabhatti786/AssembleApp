import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapComponent = ({ latitude, longitude, iosLink }) => {
  const GOOGLE_MAPS_APIKEY = "AIzaSyDeYRRtmStCSHXQBJxZa4t9uB_WXNO55H0";
  const handleMapPress = () => {
    // Open Google Maps on Android
    // Open Apple Maps on iOS
    const url = iosLink || `http://maps.apple.com/?ll=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
      <TouchableOpacity style={styles.overlay} onPress={handleMapPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
  },
});

export default MapComponent;
