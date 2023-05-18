import React from "react";
import { Button,
        StyleSheet, 
        View,
        TouchableOpacity,
        Alert} from "react-native";
import { useState } from "react";

import useBLE from "../../useBle";
import StyledText from "./StyledText";
import theme from "../theme";

const styles = StyleSheet.create({
    container:{
        alignContent: "center",
        justifyContent: 'center',
        flex: 1,
        position: 'relative'
    },
    button:{
        borderRadius: 9,
        backgroundColor: theme.colors.white,
        alignSelf: 'center',
        padding: '5%',
        color: theme.colors.secondary
    }
})

export default function Settings(){
    const {
        requestPermissions,
        scanForPeripherals,
        allDevices,
        connectToDevice,
        connectedDevice,
        heartRate,
        disconnectFromDevice,
    } = useBLE();

    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const openModal = async () => {
        scanForDevices();
        Alert.alert("Scaning!");
    };

    const scanForDevices = async () => {
        Alert.alert("Scaning!");
        const isPermissionsEnabled = await requestPermissions();
        if (isPermissionsEnabled) {
            Alert.alert("Scaning!");
            scanForPeripherals();
        }
    };
    return (
        <View style={styles.container}>
            {connectedDevice ? (
                <StyledText bold large>CONNECTED</StyledText>
            ) : (<>
                <TouchableOpacity onPress={() => (openModal)}>
                    <StyledText bold large style={styles.button}>SCAN</StyledText>            
                </TouchableOpacity>
                </>
            )}
            
        </View>




    )
}