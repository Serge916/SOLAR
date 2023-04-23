import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";
import StyledText from "./StyledText";

const styles = StyleSheet.create({
    outerContainer:{
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderRadius: 5,
        padding: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,

        elevation: 5,

    },
    box: {
        backgroundColor: 'red',
        width: 45,
        height: 45,
        margin: 1
    },
    innerContainer: {
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
        padding: 1
    },
    green: {
        backgroundColor: '#00800024' 
        
    },
    yellow: {
        backgroundColor: '#ffff0024'
    },
    orange: {
        backgroundColor: '#ffa50024'
    },
    red: {
        backgroundColor: '#ff000024'
    },
    purple: {
        backgroundColor: '#80008024'
    }

})

export default function RiskBar({value}){
    
    let state = 3

    return(
        <View style={styles.outerContainer}>
            <StyledText large style={{color: theme.colors.secondary}}>
                Risk Scale
            </StyledText>
            <View style={styles.innerContainer}>
                <View style={[styles.box, styles.green, state==1?{backgroundColor:'#008000'} : {}]}></View>
                <View style={[styles.box, styles.yellow, state==2?{backgroundColor:'#ffff00'} : {}]}></View>
                <View style={[styles.box, styles.orange, state==3?{backgroundColor:'#ffa500'} : {}]}></View>
                <View style={[styles.box, styles.red, state==4?{backgroundColor:'#ff0000'} : {}]}></View>
                <View style={[styles.box, styles.purple, state==5?{backgroundColor:'#800080'} : {}]}></View>
            </View>
        </View>
    )
}

