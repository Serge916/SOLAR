import React from "react";
import {
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  LogBox,
} from "react-native";
import { useState } from "react";

import useBLE from "../../useBle";
import StyledText from "./StyledText";
import theme from "../theme";
import DeviceModal from "./DeviceModal";

LogBox.ignoreLogs(["new NativeEventEmitter"]);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
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

export default function Settings() {
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    heartRate,
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
    <View style={styles.container}>
      {connectedDevice ? (
        <StyledText bold large>
          Connected to device!
        </StyledText>
      ) : (
        <>
          <StyledText bold large>
            No Solar devices connected
          </StyledText>
        </>
      )}

      <TouchableOpacity activeOpacity={0.87} onPress={() => openModal()}>
        <StyledText bold large style={styles.button}>
          {connectedDevice ? "Disconnect from device" : "Scan for devices"}
        </StyledText>
      </TouchableOpacity>
      <DeviceModal
        visible={isModalVisible}
        devices={allDevices}
        closeModal={hideModal}
        connectToPeripheral={connectToDevice}
      />
    </View>
  );
}
