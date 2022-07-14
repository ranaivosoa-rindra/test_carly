import { View, SafeAreaView, Alert } from 'react-native';
import React, { useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Globalstyles } from '../../styles/globalStyles';
import Geolocation from '@react-native-community/geolocation';
import { region } from '../../services/mapService';
import Loading from '../../components/loading';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeUserLocation,
} from '../../../redux/actions/actions';


const Map = () => {

	const dispatch = useDispatch();

	useEffect(() => {

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
				dispatch(
					changeUserLocation({
						latitude: info.coords.latitude,
						longitude: info.coords.longitude,
						latitudeDelta: latitudeDelta,
						longitudeDelta: longitudeDelta,
					}),
				);
			},
			error => { },
			config,
		);

	}, []);

	var currentUserLocation = useSelector((store: any) => store.currentUserLocation.currentUserLocation);

	if (currentUserLocation.latitude != 0) {

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
		return <Loading />;
	}
};


export default Map;