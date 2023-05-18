import React, {useState} from "react";
import { StyleSheet,
         View,
        Button,
        Alert } from 'react-native';


import Constants from 'expo-constants'
import theme from "../theme";

import Display from "./Display";
import RiskBar from "./RiskBar";
import Logo from "./Logo";

const index = 5;

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '90%',
        width: '100%',

    },
    secondContainer: {
        justifyContent: 'center',
    },
    header: {
        position: 'relative',
        top: 50,
    },
    arrowUp: {
        transform: [{rotate: '90deg'}],
        color: theme.colors.secondary,
        borderColor: theme.colors.secondary,
        borderRadius: 999,
        width: 40,
        height: 40,
        borderWidth: 0.5,
        padding: 3,
        textAlign: 'center',
        backgroundColor: theme.colors.white,
        top: '30%'
    }
})

export default function Home(){

    return(
        <View style={styles.mainContainer}>
            <View style={{width: '100%', height: '20%', top: Constants.statusBarHeight + 20}}>
                <Logo />
            </View>
            <Display value={index} style={styles.secondContainer}/>
            <RiskBar value={index}/>
        </View>
    );
}

