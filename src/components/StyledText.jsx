import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: theme.colors.textPrimary,
        fontWeight: 400,
        fontFamily: 'Roboto',
        margin: 3
    },
    bold: {
        fontWeight: 800
    },
    small: {
        fontSize: 10
    },
    large: {
        fontSize: 20
    },
    header: {
        fontSize: 50
    }
})


export default function StyledText({children, bold, small, large, header, style, ...restOfProps}){
    const textStyles = [
        styles.text,
        bold && styles.bold,
        small && styles.small,
        large && styles.large,
        header && styles.header,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}