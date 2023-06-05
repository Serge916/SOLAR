import React, { useCallback } from "react";
import { Device } from "react-native-ble-plx";
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
  Modal,
  View,
} from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  modalFlatlistContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
  },
  modalCellOutline: {
    borderWidth: 1,
    borderColor: theme.colors.black,
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  modalTitle: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  modalTitleText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.secondary,
  },
});

const DeviceModalListItem = ({ item, connectToPeripheral, closeModal }) => {
  const connectAndCloseModal = useCallback(() => {
    connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral, item.item]);

  return (
    <TouchableOpacity onPress={connectAndCloseModal} style={styles.ctaButton}>
      <StyledText style={styles.ctaButtonText}>{item.item.name}</StyledText>
    </TouchableOpacity>
  );
};

export default function DeviceModal({
  devices,
  visible,
  connectToPeripheral,
  closeModal,
}) {
  const renderDeviceModalListItem = useCallback(
    (item) => {
      return (
        <DeviceModalListItem
          item={item}
          connectToPeripheral={connectToPeripheral}
          closeModal={closeModal}
        />
      );
    },
    [closeModal, connectToPeripheral]
  );
  return (
    <Modal
      style={styles.modalContainer}
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalTitle}>
        <StyledText bold style={styles.modalTitleText}>
          Tap on a device to connect
        </StyledText>
      </View>
      <FlatList
        contentContainerStyle={styles.modalFlatlistContainer}
        data={devices}
        renderItem={renderDeviceModalListItem}
      />
    </Modal>
  );
}
