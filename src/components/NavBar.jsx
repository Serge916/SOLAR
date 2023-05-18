import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import StyledText from "./StyledText";
import Menu from "./Menu";
import SwipeBar from "./SwipeBar";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    bottomPosition: {
        position: 'absolute',
        alignSelf: 'center',
        top: '90%'

        
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
    <>
    {menuState ? (
        <View style={{flex:1, position: "absolute", width: '100%', height: '100%'}}>
            <Menu show>
                <TouchableOpacity onPress={() => (changeMenu(0))}>
                    <StyledText large bold style={styles.arrowUp}>
                        &gt;
                    </StyledText>
                </TouchableOpacity>
            </Menu>
        </View>
        
        ) : (
        <View style={styles.bottomPosition}>
            <TouchableOpacity  onPress={() => ( changeMenu(1)) }>
                <SwipeBar/>
            </TouchableOpacity>
        </View>
            
        )}
    </>
    )    
}