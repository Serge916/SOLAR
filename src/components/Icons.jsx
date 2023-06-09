import React from "react";
import { View, StyleSheet } from "react-native";
import {
  ProfileVector,
  ChartVector,
  WebVector,
  GearVector,
  CalendarVector,
  HomeVector,
} from "./IconVectors";

import StyledText from "./StyledText";
import theme from "../theme";

const styles = StyleSheet.create({
  icon: {
    width: 75,
    height: 75,
  },
  container: {
    width: "70%",
    height: "90%",
    margin: 6,
    alignItems: "center",
    alignContent: "center",
  },
});

function ProfileIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <ProfileVector />
      </View>
      <StyledText bold style={{ color: theme.colors.secondary }}>
        Profile
      </StyledText>
    </View>
  );
}

function ChartIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <ChartVector />
      </View>
      <StyledText bold style={{ color: theme.colors.secondary }}>
        Charts
      </StyledText>
    </View>
  );
}

function WebIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <WebVector />
      </View>
      <StyledText bold style={{ color: theme.colors.secondary }}>
        Advice
      </StyledText>
    </View>
  );
}

function SettingsIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <GearVector />
      </View>
      <StyledText bold style={{ color: theme.colors.secondary }}>
        Settings
      </StyledText>
    </View>
  );
}

function CalendarIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <CalendarVector />
      </View>
      <StyledText bold style={{ color: theme.colors.secondary }}>
        Month
      </StyledText>
    </View>
  );
}

function HomeIcon() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <HomeVector />
      </View>
      <StyledText bold style={{ color: theme.colors.secondary }}>
        Home
      </StyledText>
    </View>
  );
}

export {
  ProfileIcon,
  ChartIcon,
  WebIcon,
  SettingsIcon,
  CalendarIcon,
  HomeIcon,
};
