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
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location';

interface ILocation {
  latitude: number,
  longitude: number,
  latitudeDelta : number,
  longitudeDelta : number
}


function region(lat:any, lon : any, distance : any) {

  distance = distance/2

  const circumference = 40075
  const oneDegreeOfLatitudeInMeters = 111.32 * 1000
  const angularDistance = distance/circumference

  const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
  const longitudeDelta = Math.abs(Math.atan2(
          Math.sin(angularDistance)*Math.cos(lat),
          Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

  return {
      latitudeDelta,
      longitudeDelta,
  }
}

async function position(){

  var data : any 

  const location = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 100000,
  })

  const {latitudeDelta,longitudeDelta} =  region(location.latitude, location.longitude, location.accuracy);
  // console.log(location);
  
  data = location;
  // return data = {
  //   latitude: location.latitude,
  //   longitude: location.longitude,
  //   latitudeDelta,
  //   longitudeDelta
  // }

  // console.log(data);

  return data;
  
}
var a = position();
console.log(a);

const App = () => {
  const [currentLocation, setcurrentLocation] = useState<ILocation>()

  useEffect(  ()  =>  {

    // position();
    // console.log(data);
    

    
  }, []);

  return (

    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude:  -18.90098,
            longitude: 47.5507109,
            latitudeDelta: 0.00013264912390426213,
            longitudeDelta: 0.0003108147403696167,
          }}
          provider={PROVIDER_GOOGLE}>
          {/* <Marker
            draggable
            coordinate={{
              latitude: 0,
              longitude: 0,
            }}
            onDragEnd={e =>
              Alert.alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Test Marker'}
            description={'This is a description of the marker'}
          /> */}

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
