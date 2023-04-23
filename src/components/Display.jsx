import { View } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../theme";

import StyledText from "./StyledText";

const styles = StyleSheet.create({
    container: {
        borderColor: theme.colors.white,
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        paddingHorizontal: 30,
        margin: 30,
        flexDirection: 'row',
        alignItems: 'center',
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

export default function Display({value}){

    return(
        <View style={styles.container}>
            <StyledText large style={{color: theme.colors.secondary}}>
                Index: 
            </StyledText>
            <StyledText header style={{color: theme.colors.black}} >
                {value}
            </StyledText>
        </View>
    );
}