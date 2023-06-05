import React from "react";
import { Button, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import NavBar from "./NavBar";

export default function Prueba({ useSQLite }) {
  return (
    <View>
      <Button onPress={() => useSQLite.fetchData()} title="Press ME!" />
      <Button
        onPress={() => useSQLite.addDayData(1685996961)}
        title="ADD to the DB!"
      />
    </View>
  );
}
