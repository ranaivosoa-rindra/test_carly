/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';



interface ILocation {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

function region(lat: any, lon: any, distance: any) {
  distance = distance / 0.2;

  const circumference = 40075;
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
  const angularDistance = distance / circumference;

  const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
  const longitudeDelta = Math.abs(
    Math.atan2(
      Math.sin(angularDistance) * Math.cos(lat),
      Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat),
    ),
  );

  return {
    latitudeDelta,
    longitudeDelta,
  };
}

const App = () => {
  const [currentLocation, setcurrentLocation] = useState<ILocation>();

  useEffect(() => {


    Geolocation.getCurrentPosition(info => {

      const { latitudeDelta, longitudeDelta } = region(
        info.coords.latitude,
        info.coords.longitude,
        info.coords.accuracy,
      );
      setcurrentLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
      });
    });
  }, [currentLocation]);

  if (currentLocation) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: currentLocation.latitudeDelta,
              longitudeDelta: currentLocation.longitudeDelta,
            }}
            provider={PROVIDER_GOOGLE}>

            <Marker
              draggable
              coordinate={{
                latitude: -18.90098,
                longitude: 47.5507109,
              }}
              onDragEnd={e =>
                Alert.alert(JSON.stringify(e.nativeEvent.coordinate))
              }
              title={'New Marker'}
              description={'This is a description of the new marker'}
            />
          </MapView>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <View>
        <Text>Helllloo</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default App;
