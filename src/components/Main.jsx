import React, { useEffect } from "react";
import { View } from "react-native";
import { Route, Routes } from "react-router-native";
import Constants from "expo-constants";

import * as FileSystem from "expo-file-system";

import Home from "./Home";
import Prueba from "./Prueba";
import NavBar from "./NavBar";
import WeekPage from "./WeekPage";
import DayPage from "./DayPage";
import theme from "../theme";

import StyledText from "./StyledText";
import "../globals";
import Settings from "./Settings";

import useBLE from "../../useBle";
import useSQLite from "../../useSQLite";

export default function Main() {
  useEffect(() => {
    console.log(FileSystem.documentDirectory);
  }, []);

  const {
    requestPermissions,
    scanForPeripherals,
    allDevices,
    connectToDevice,
    connectedDevice,
    sensorValue,
    disconnectFromDevice,
  } = useBLE();

  const { addDayData, fetchData, eraseAllData, dayData } = useSQLite();

  useEffect(() => {
    connectedDevice && addDayData(sensorValue) && console.log("Adding value!");
  }, [sensorValue]);
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
        <Route
          exact
          path="/prueba"
          Component={(props) => (
            <Prueba useSQLite={{ addDayData, fetchData }} />
          )}
        />
        <Route
          exact
          path="/week"
          Component={(props) => <DayPage useSQLite={{ dayData }} />}
        />
        <Route
          exact
          path="/settings"
          Component={(props) => (
            <Settings
              useSQLite={{ eraseAllData }}
              useBLE={{ disconnectFromDevice }}
            />
          )}
        />
      </Routes>
      <NavBar />
    </View>
  );
}
