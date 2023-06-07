import React from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import theme from "../theme";

import {
  ChartIcon,
  WebIcon,
  SettingsIcon,
  CalendarIcon,
  HomeIcon,
} from "./Icons";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: theme.colors.white,
    alignItems: "center",
    alignContent: "space-around",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    transform: [{ translateY: 1000 }],
  },
  box: {
    width: "90%",
    height: "70%",
    flexDirection: "row",
    flexWrap: "wrap",
    top: "10%",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  show: {
    transform: [{ translateY: 0 }],
  },
  icon: {
    height: 75,
    margin: 10,
    marginBottom: 50,
    borderRadius: 5,
  },
});

export default function Menu({ children, style, show }) {
  const menuStyles = [styles.container, show && styles.show, style];
  return (
    <View style={menuStyles}>
      {children}
      <View style={styles.box}>
        <Link to={"/"} style={styles.icon} underlayColor={"#00000009"}>
          <HomeIcon />
        </Link>
        <Link to={"/week"} style={styles.icon} underlayColor={"#00000009"}>
          <ChartIcon />
        </Link>
        <Link to={"/month"} style={styles.icon} underlayColor={"#00000009"}>
          <CalendarIcon />
        </Link>
        <Link to={"/settings"} style={styles.icon} underlayColor={"#00000009"}>
          <SettingsIcon />
        </Link>
        <Link to={"/advise"} style={styles.icon} underlayColor={"#00000009"}>
          <WebIcon />
        </Link>
      </View>
    </View>
  );
}
