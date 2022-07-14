import { View, SafeAreaView, Alert, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Globalstyles } from '../../styles/globalStyles'
import { ILocation } from '../../models/interfaces'
import Geolocation from '@react-native-community/geolocation'
import { region } from '../../services/mapService'
import Loading from '../../components/loading'
import { useDispatch, useSelector } from 'react-redux'
import { changeLoading, changeLocationSetting, changeUserLocation } from '../../../redux/actions/actions'
import RNSettings from 'react-native-settings';

const Map = () => {

  const loading = useSelector((store: any) => store.loading.loading);
  const location_setting = useSelector((store: any) => store.location_setting.location_setting);
  const currentUserLocation = useSelector((store: any) => store.currentUserLocation.currentUserLocation);


  const config = {
    enableHighAccuracy: true,
    timeout: 150000,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    RNSettings.getSetting(RNSettings.LOCATION_SETTING).then((result: any) => {
      dispatch(changeLoading(true))
  
      if (result == RNSettings.ENABLED) {
  
        console.log('location is enabled');
  
        dispatch(changeLocationSetting(true));
        Geolocation.getCurrentPosition(
  
          info => {
            const { latitudeDelta, longitudeDelta } = region(
              info.coords.latitude,
              info.coords.accuracy,
            );
            dispatch(changeUserLocation({
              latitude: info.coords.latitude,
              longitude: info.coords.longitude,
              latitudeDelta: latitudeDelta,
              longitudeDelta: longitudeDelta,
            }))
          },
          error => {
          },
          config
        );
  
      } else {
        console.log('location is disabled');
        Alert.alert(
          "Location required", "You need to activate location !",
          [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            {
              text: "Activate", onPress: () => RNSettings.openSetting(RNSettings.ACTION_LOCATION_SOURCE_SETTINGS).then(
                (result: any) => {
                  if (result === RNSettings.ENABLED) {
  
                    console.log('location is enabled');
  
                    dispatch(changeLocationSetting(true));
  
                    Geolocation.getCurrentPosition(
  
                      info => {
                        const { latitudeDelta, longitudeDelta } = region(
                          info.coords.latitude,
                          info.coords.accuracy,
                        );
                        dispatch(changeUserLocation({
                          latitude: info.coords.latitude,
                          longitude: info.coords.longitude,
                          latitudeDelta: latitudeDelta,
                          longitudeDelta: longitudeDelta,
                        }))
                      },
                      error => {
                      },
                      config
                    );
  
                  }
                },
              )
            }
          ]
        );
      }
      dispatch(changeLoading(false))
  
    });
  }, [])

  console.log("currentLocation: " + currentUserLocation.latitude);
  console.log("loading: " + !loading);
  console.log("location_setting: " + location_setting);
  console.log("3-----: " + (currentUserLocation && !loading && location_setting));

  
  if (currentUserLocation && !loading && location_setting) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={Globalstyles.container}>
          <MapView
            style={Globalstyles.mapStyle}
            mapType="hybrid"
            initialRegion={{
              latitude: currentUserLocation.latitude,
              longitude: currentUserLocation.longitude,
              latitudeDelta: currentUserLocation.latitudeDelta,
              longitudeDelta: currentUserLocation.longitudeDelta,
            }}
            provider={PROVIDER_GOOGLE}>

            <Marker
              draggable
              coordinate={{
                latitude: currentUserLocation.latitude,
                longitude: currentUserLocation.longitude,
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
      <Loading />
    );
  }
}

export default Map