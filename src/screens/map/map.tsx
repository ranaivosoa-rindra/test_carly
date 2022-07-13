import { View, Text, SafeAreaView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Globalstyles } from '../../styles/globalStyles'
import { ILocation } from '../../models/interfaces'
import Geolocation from '@react-native-community/geolocation'
import { region } from '../../services/mapService'
import Loading from '../../components/loading'

const Map = () => {
    const [currentLocation, setcurrentLocation] = useState<ILocation>();
    const [isLoading, setIsLoading] = useState<Boolean>(false);

    useEffect(() => {

        setIsLoading(true);
        const config = {
          enableHighAccuracy: true,
          timeout: 150000,
        };
    
        Geolocation.getCurrentPosition(
          
          info => {
            const { latitudeDelta, longitudeDelta } = region(
              info.coords.latitude,
              info.coords.accuracy,
            );
            setcurrentLocation({
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
              latitudeDelta: latitudeDelta,
              longitudeDelta: longitudeDelta,
            });
          },
          error => {
            Alert.alert('ERR0R', error.message);
          },
          config
        );
        setIsLoading(false);
      }, [currentLocation]);

      if (currentLocation && !isLoading) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View style={Globalstyles.container}>
              <MapView
                style={Globalstyles.mapStyle}
                mapType="hybrid"
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
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
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
      }else {
        return(
            <View>
                <Text>
                    Hello
                </Text>
            </View>
        );
    }
}

export default Map