import React from "react";
import { Alert,
        Button,
        StyleSheet,
        Text,
        View,
        TouchableOpacity } from 'react-native';
import { Switch, Route } from "react-router-native";
import { StatusBar } from "expo-status-bar";


import Constants from 'expo-constants'
import theme from "../theme";

import StyledText from "./StyledText";
import Display from "./Display";
import SwipeBar from "./SwipeBar";
import RiskBar from "./RiskBar";
import Logo from "./Logo";

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        flex: 1,
        justifyContent: 'space-around'

    },
    secondContainer: {
        justifyContent: 'center',
    },
    header: {
        position: 'relative',
        top: 50,
    }
})

export default function Main(){

    return(
        <View style={styles.mainContainer}>
            <View style={{width: '100%', height: '20%', top: Constants.statusBarHeight + 20}}>
                <Logo />
            </View>
            <Display style={styles.secondContainer}/>
                <RiskBar />

            <TouchableOpacity onPress={() => Alert.alert("Hello")}>
                <SwipeBar/>
            </TouchableOpacity>
        </View>
    );
}

