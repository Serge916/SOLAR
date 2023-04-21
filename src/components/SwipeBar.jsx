import React from "react";
import { Text, StyleSheet } from "react-native";

import StyledText from "./StyledText";
import theme from "../theme";

const styles = StyleSheet.create({
    arrowUp: {
        transform: [{rotate: '-90deg'}],
        color: theme.colors.secondary,
        borderColor: theme.colors.secondary,
        borderRadius: 999,
        width: 40,
        height: 40,
        borderWidth: 0.5,
        padding: 3,
        textAlign: 'center',
        backgroundColor: theme.colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,

        elevation: 5,

    }
})

export default function SwipeBar(){
    return(
        <StyledText large bold style={styles.arrowUp}>
            &gt;
        </StyledText>
    )
}