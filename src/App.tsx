import React from 'react';
import {View, Button, Text } from 'react-native';
import {useDispatch, useSelector } from 'react-redux';
import { changeLoading } from '../redux/actions/actions';
import Navigation from './routes/stackNavigation';


const App = () => {

  const dispatch = useDispatch();
 
  const loading = useSelector((store:any) => store.loading.loading);

  const trueLoading = () => {
    dispatch(changeLoading(true));
  };
 
  const falseLoading = () => {
    dispatch(changeLoading(false));
  };

  return (
    // <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    //   <Button
    //     title="Change"
    //     onPress={() => trueLoading()}
    //   />
    //   <Text> {loading.toString()}</Text>
    //   <Button
    //     title="Change"
    //     onPress={() => falseLoading()}
    //   />
    // </View>
    <Navigation/>
  );

}


export default App;
