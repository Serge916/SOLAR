import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Alert,
  LogBox,
  TouchableOpacity,
} from "react-native";

import Constants from "expo-constants";
import theme from "../theme";

import Display from "./Display";
import RiskBar from "./RiskBar";
import Logo from "./Logo";

import useBLE from "../../useBle";
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

export default function Home() {
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    sensorValue,
    disconnectFromDevice,
  } = useBLE();

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
    const isPermissionsEnabled = await requestPermissions();
    if (isPermissionsEnabled) {
      scanForPeripherals();
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
      {connectedDevice ? (
        <>
          <Display value={sensorValue} style={styles.secondContainer} />
          <RiskBar value={sensorValue} />
        </>
      ) : (
        <>
          <TouchableOpacity activeOpacity={0.87} onPress={() => openModal()}>
            <StyledText bold large style={styles.button}>
              Scan for devices
            </StyledText>
          </TouchableOpacity>
          <DeviceModal
            visible={isModalVisible}
            devices={allDevices}
            closeModal={hideModal}
            connectToPeripheral={connectToDevice}
          />
        </>
      )}
    </View>
  );
}
