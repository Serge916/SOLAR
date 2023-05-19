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

export default function Main() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <StyledText
        large
        style={{
          position: "absolute",
          alignSelf: "flex-end",
          top: Constants.statusBarHeight,
          right: Constants.statusBarHeight,
        }}
      >
        {global.connectedDevice ? "\u{2022}" : "\u{2717}"}
      </StyledText>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/prueba" Component={Prueba} />
        <Route exact path="/week" Component={WeekPage} />
        <Route exact path="/settings" Component={Settings} />
      </Routes>
      <NavBar />
    </View>
  );
}
