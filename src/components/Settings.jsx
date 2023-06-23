import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Alert,
  StyleSheet,
  View,
  TouchableOpacity,
  LogBox,
} from "react-native";

import StyledText from "./StyledText";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
  button: {
    borderRadius: 9,
    backgroundColor: theme.colors.white,
    alignSelf: "center",
    padding: "5%",
    color: theme.colors.secondary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default function Settings({ useSQLite, useBLE }) {
  const onEraseConfirmation = (isConfirmed) => {
    if (isConfirmed) {
      useSQLite.eraseAllData();
    } else {
      console.log("DONT!");
    }
  };
  const clearData = () => {
    Alert.alert(
      "You sure?",
      "This will irreversibly erase the data",
      [
        { text: "Go ahead", onPress: () => onEraseConfirmation(true) },
        { text: "NO!", onPress: () => onEraseConfirmation(false) },
      ],
      { cancelable: true }
    );
  };
  const onDisconnectConfirmation = (isConfirmed) => {
    if (isConfirmed) {
      useBLE.disconnectFromDevice();
    } else {
      console.log("DONT!");
    }
  };
  const disconnect = () => {
    Alert.alert(
      "You sure?",
      "This will lose the connection with your SOLAR device",
      [
        { text: "Go ahead", onPress: () => onDisconnectConfirmation(true) },
        { text: "NO!", onPress: () => onDisconnectConfirmation(false) },
      ],
      { cancelable: true }
    );
  };

  const runSQL = () => {
    useSQLite.runSQL();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.87} onPress={() => clearData()}>
        <StyledText bold large style={styles.button}>
          Clear data
        </StyledText>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.87} onPress={() => disconnect()}>
        <StyledText bold large style={styles.button}>
          Disconnect from Device
        </StyledText>
      </TouchableOpacity>
      {/* <TouchableOpacity activeOpacity={0.87} onPress={() => runSQL()}>
        <StyledText bold large style={styles.button}>
          Run SQLite sentence
        </StyledText>
      </TouchableOpacity> */}
    </View>
  );
}
