import React from "react";
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
        backgroundColor: 'green'
    },
    yellow: {
        backgroundColor: 'yellow'
    },
    orange: {
        backgroundColor: 'orange'
    },
    red: {
        backgroundColor: 'red'
    },
    purple: {
        backgroundColor: 'purple'
    }

})

export default function RiskBar(){
    return(
        <View style={styles.outerContainer}>
            <StyledText large style={{color: theme.colors.secondary}}>
                Risk Scale
            </StyledText>
            <View style={styles.innerContainer}>
                <View style={[styles.box, styles.green]}></View>
                <View style={[styles.box, styles.yellow]}></View>
                <View style={[styles.box, styles.orange]}></View>
                <View style={[styles.box, styles.red]}></View>
                <View style={[styles.box, styles.purple]}></View>
            </View>
        </View>
    )
}