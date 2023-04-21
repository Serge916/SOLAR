import React, {useState} from "react";
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
import Menu from "./Menu";

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
    },
    hide: {
        opacity: 0
    },
    show: {
        opacity: 1
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

export default function Main(){

    const [menuState, changeMenu] = useState(0)
    return(
        <View style={styles.mainContainer}>
            <View style={{width: '100%', height: '20%', top: Constants.statusBarHeight + 20}}>
                <Logo />
            </View>
            <Display style={styles.secondContainer}/>
                <RiskBar />

            <TouchableOpacity activeOpacity={menuState ? 0 : 0.5} style={menuState ? styles.hide : styles.show} onPress={() => ( !menuState && changeMenu(1)) }>
                <SwipeBar/>
            </TouchableOpacity>

            <Menu show={menuState ? 1: 0}>
                <TouchableOpacity onPress={() => (menuState && changeMenu(0))}>
                    <StyledText large bold style={styles.arrowUp}>
                        &gt;
                    </StyledText>
                </TouchableOpacity>
            </Menu>
        </View>
    );
}

