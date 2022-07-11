/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, type PropsWithChildren} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

interface Habitant {
  id: number;
  name: String;
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [people, setpeople] = useState<Habitant[]>([
    {
      id: 0,
      name: 'GR',
    },
    {
      id: 1,
      name: 'Rindra',
    },
    {
      id: 2,
      name: 'RNVS',
    },
    {
      id: 3,
      name: 'PT',
    },
  ]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   {/* <Text>{people.map(person => person.name)}</Text> */}
    //   {/* <FlatList
    //     data={people}
    //     renderItem={({item}) => {
    //       return (
    //         <View style={{padding: 10}}>
    //           <Text style={{fontSize: 26}}>{item.name}</Text>
    //         </View>
    //       );
    //     }}
    //   /> */}
    // </SafeAreaView>
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}>
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={e =>
              Alert.alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />

          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4327,
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
