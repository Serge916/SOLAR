import React from "react";
import Main from "./src/components/Main";
import { NativeRouter, Route, Routes } from "react-router-native";
import { useState } from "react";

import { BleManager } from "react-native-ble-plx";
import { Button } from "react-native";

import useBLE from "./useBle";

export default function App() {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
}
