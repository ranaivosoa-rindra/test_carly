import { View, Alert } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
	changeLocationSetting,
} from '../../../redux/actions/actions';
import RNSettings from 'react-native-settings';


const Authorisation = ({ navigation }: { navigation: any }) => {

	var dispatch = useDispatch();

	RNSettings.getSetting(RNSettings.LOCATION_SETTING).then((result: any) => {

		if (result == RNSettings.ENABLED) {
			dispatch(changeLocationSetting(true));
			navigation.navigate('Map');
		} 

		else {
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
							RNSettings.ACTION_LOCATION_SOURCE_SETTINGS
						).then((result: any) => {
							if (result === RNSettings.ENABLED) {
								dispatch(changeLocationSetting(true));
								navigation.navigate('Map');
							}
						}),
				},
			]);
		}
	});

	return (
		<View style={{ flex: 1, backgroundColor:"#ffffff"}}>
		</View>
	);
};


export default Authorisation;