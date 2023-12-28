import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
  ScrollView,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapComponent = ({ latitude, longitude, address }) => {
  const GOOGLE_MAPS_APIKEY = "AIzaSyDeYRRtmStCSHXQBJxZa4t9uB_WXNO55H0";

  const handleMapPress = () => {
    const scheme = Platform.select({
      ios: "maps://0,0?q=",
      android: "geo:0,0?q=",
    });
    const latLng = `${latitude},${longitude}`;
    const label = address;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followUserLocation
          loadingEnabled
          // provider={PROVIDER_GOOGLE}
          // initialRegion={{
          //   latitude,
          //   longitude,
          //   latitudeDelta: 0.0922,
          //   longitudeDelta: 0.0421,
          // }}
        >
          <Marker coordinate={{ latitude, longitude }} />
        </MapView>
      </View>
      <TouchableOpacity style={styles.overlay} onPress={handleMapPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    overflow: "hidden", // Clip the border radius
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
