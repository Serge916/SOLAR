import React from "react";
import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import Constants from "expo-constants";

import Home from "./Home";
import Prueba from "./Prueba";
import NavBar from "./NavBar";
import WeekPage from "./WeekPage";
import theme from "../theme";

import StyledText from "./StyledText";
import "../globals";
import Settings from "./Settings";

import useBLE from "../../useBle";

export default function Main() {
  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    sensorValue,
    disconnectFromDevice,
  } = useBLE();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <Routes>
        <Route
          exact
          path="/"
          Component={(props) => (
            <Home
              useBLE={{
                requestPermissions,
                scanForPeripherals,
                allDevices,
                connectToDevice,
                connectedDevice,
                sensorValue,
                disconnectFromDevice,
              }}
            />
          )}
        />
        <Route exact path="/prueba" Component={Prueba} />
        <Route exact path="/week" Component={WeekPage} />
        <Route exact path="/settings" Component={Settings} />
      </Routes>
      <NavBar />
    </View>
  );
}
