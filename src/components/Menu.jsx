import React, { Component } from "react";
import { View,
         StyleSheet,
         TouchableOpacity,
         Alert } from "react-native";
import { Link } from "react-router-native";

import theme from "../theme";

import {ProfileIcon, ChartIcon, WebIcon, SettingsIcon, CalendarIcon, HomeIcon} from "./Icons";
import StyledText from "./StyledText";


const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '50%',
        top: '50%',
        position: 'absolute',
        backgroundColor: theme.colors.white,
        alignItems: 'center',
        alignContent: 'space-around',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        transform: [{translateY: 1000}],
    },
    box: {
        width: '90%',
        height: '70%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        top: '10%',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',

        
    },
    show: {
        transform: [{translateY: 0}]
    },
    icon: {
        height: 75,
        margin: 10,
        marginBottom: 50,
        borderRadius: 5
    }
})

export default function Menu({children, style, show}){
    const menuStyles = [
        styles.container,
        show && styles.show,
        style
    ]
    return(
        <View style={menuStyles}>
            {children}
        <View style={styles.box}>
            <Link to={'/'} style={styles.icon} underlayColor={'#00000009'}>
                <HomeIcon />
            </Link>
            <Link to={'/prueba'} style={styles.icon} underlayColor={'#00000009'}>
                <ChartIcon />
            </Link>
            <TouchableOpacity style={styles.icon} onPress={() => Alert.alert("Not Implemented")}>
                <CalendarIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={() => Alert.alert("Not implemented")}>
                <SettingsIcon />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={() => Alert.alert("Not implemented")}>
                <WebIcon />
            </TouchableOpacity>
        </View>
        </View>
    )
}