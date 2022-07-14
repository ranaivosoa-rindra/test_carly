import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../constants/theme";

export const Globalstyles = StyleSheet.create({
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
    basicText: {
      color: "#000",
      fontSize: 25
    },
    basicContainer: {
      flex: 1, justifyContent: "center", alignItems: "center", 
    },
    textInputBox: {borderColor: "#000", borderWidth: 0.5, width: Dimensions.get("screen").width*0.75, paddingLeft: 15, color: Colors.black }
  });

export const LoadingStyles = StyleSheet.create({
    container: {flex: 1, justifyContent: "center", alignItems:"center", backgroundColor: Colors.white}
})
