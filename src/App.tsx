import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, View, ActivityIndicator, Button, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Map from './screens/map/map';
import { connect } from 'react-redux';
import { changeLoading } from '../redux/actions/actions';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import Loading from './components/loading';
import Navigation from './routes/stackNavigation';



const App = ({ loading }: { loading: any }) => {

  function trueLoading() {
    changeLoading(true);
  }
  function falseLoading() {
    changeLoading(false);
  }


  return (
    // <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    //   <Button
    //     title="Change"
    //     onPress={() => trueLoading()}
    //   />
    //   <Text> {loading} </Text>
    //   <Button
    //     title="Change"
    //     onPress={() => falseLoading()}
    //   />
    // </View>
    <Navigation/>
  );
}

const mapStateToProps = (state: { loading: any; }) => ({
  count: state.loading,
});

const ActionCreators = Object.assign(
  {},
  changeLoading,
);


const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(App)
