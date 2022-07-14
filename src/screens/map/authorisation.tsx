import {View, Text, Button, Alert} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Globalstyles} from '../../styles/globalStyles';
import {ILocation} from '../../models/interfaces';
import Geolocation from '@react-native-community/geolocation';
import {region} from '../../services/mapService';
import Loading from '../../components/loading';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeLoading,
  changeLocationSetting,
  changeUserLocation,
} from '../../../redux/actions/actions';
import RNSettings from 'react-native-settings';
const Authorisation = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();

  RNSettings.getSetting(RNSettings.LOCATION_SETTING).then((result: any) => {
    // dispatch(changeLoading(true));

    if (result == RNSettings.ENABLED) {
      console.log('location is enabled');

      dispatch(changeLocationSetting(true));
    } else {
      console.log('location is disabled');
      Alert.alert('Location required', 'You need to activate location !', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Activate',
          onPress: () =>
            RNSettings.openSetting(
              RNSettings.ACTION_LOCATION_SOURCE_SETTINGS,
            ).then((result: any) => {
              if (result === RNSettings.ENABLED) {
                console.log('location is enabled');
                dispatch(changeLocationSetting(true));
              }
            }),
        },
      ]);
    }
    dispatch(changeLoading(true));
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>authorisation</Text>
      {/* <Button
        title="get location"
        onPress={() => {
          getCurrentPosition();
        }}
      /> */}
      <Button
        title="Navigate"
        onPress={() => {
          navigation.navigate('Map');
        }}
      />
    </View>
  );
};

export default Authorisation;
