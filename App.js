import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import { NativeRouter, Route, Routes } from 'react-router-native';

import StyledText from './src/components/StyledText';
import Prueba from './src/components/Prueba';

const Point = () => <StyledText>Hello!</StyledText>;


export default function App() {
  return (
    <NativeRouter>
      <Main/>
    </NativeRouter>

  
  )
}


