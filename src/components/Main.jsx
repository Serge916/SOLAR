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
import SlidingComponents from "./SlidingComponents";
import AdvisePage from "./AdvisePage";
import MonthPage from "./MonthPage";

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

  const { addDayData, fetchData, eraseAllData, dayData, monthData, runSQL } =
    useSQLite();

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
          Component={(props) => (
            <SlidingComponents useSQLite={{ dayData, monthData }} />
          )}
        />
        <Route
          exact
          path="/month"
          Component={(props) => <MonthPage useSQLite={{ monthData }} />}
        />
        <Route
          exact
          path="/settings"
          Component={(props) => (
            <Settings
              useSQLite={{ eraseAllData, runSQL }}
              useBLE={{ disconnectFromDevice }}
            />
          )}
        />
        <Route exact path="/advise" Component={(props) => <AdvisePage />} />
      </Routes>
      <NavBar />
    </View>
  );
}
