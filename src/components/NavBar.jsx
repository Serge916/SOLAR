import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import Menu from "./Menu";
import SwipeBar from "./SwipeBar";

const styles = StyleSheet.create({
    hide: {
        opacity: 0
    },
    show: {
        opacity: 1,
        alignSelf: 'center',
        top: '90%',

        
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


export default function NavBar(){
    const [menuState, changeMenu] = useState(0)

return(
    <View style={{flex:1, position: "absolute", width: '100%', height: '100%'}}>
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
    )    
}