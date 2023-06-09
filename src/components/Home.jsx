import React, { useContext, useState } from "react";
import { StyleSheet, View, LogBox, TouchableOpacity } from "react-native";

import Constants from "expo-constants";
import theme from "../theme";

import Display from "./Display";
import RiskBar from "./RiskBar";
import Logo from "./Logo";

import StyledText from "./StyledText";
import DeviceModal from "./DeviceModal";

LogBox.ignoreLogs(["new NativeEventEmitter"]);

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    height: "90%",
    width: "100%",
  },
  secondContainer: {
    justifyContent: "center",
  },
  header: {
    position: "relative",
    top: 50,
  },
  arrowUp: {
    transform: [{ rotate: "90deg" }],
    color: theme.colors.secondary,
    borderColor: theme.colors.secondary,
    borderRadius: 999,
    width: 40,
    height: 40,
    borderWidth: 0.5,
    padding: 3,
    textAlign: "center",
    backgroundColor: theme.colors.white,
    top: "30%",
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

export default function Home({ useBLE }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = async () => {
    console.log("Scan called!");
    scanForDevices();
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const scanForDevices = async () => {
    const isPermissionsEnabled = await useBLE.requestPermissions();
    if (isPermissionsEnabled) {
      useBLE.scanForPeripherals();
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width: "100%",
          height: "20%",
          top: Constants.statusBarHeight + 20,
        }}
      >
        <Logo />
      </View>
      {useBLE.connectedDevice ? (
        <>
          <Display
            value={Math.round((useBLE.sensorValue * 15) / 0xff)}
            style={styles.secondContainer}
          />
          <RiskBar value={Math.round((useBLE.sensorValue * 15) / 0xff)} />
        </>
      ) : (
        <>
          <StyledText bold>
            Connect to a SENSOR device to get real time statistics!
          </StyledText>
          <TouchableOpacity activeOpacity={0.87} onPress={() => openModal()}>
            <StyledText bold large style={styles.button}>
              Scan for devices
            </StyledText>
          </TouchableOpacity>
          <DeviceModal
            visible={isModalVisible}
            devices={useBLE.allDevices}
            closeModal={hideModal}
            connectToPeripheral={useBLE.connectToDevice}
          />
        </>
      )}
    </View>
  );
}
