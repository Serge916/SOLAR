import React from "react";

import { View } from "react-native";
import {Switch, Route, Routes} from 'react-router-native'
import Home from "./Home";
import Prueba from "./Prueba";
import NavBar from "./NavBar";
import theme from "../theme";

export default function Main(){
    return(
        <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
                <Routes>
                    <Route exact path="/" Component={Home}/>
                    <Route exact path="/prueba" Component={Prueba}/>
                </Routes>
                <NavBar/>
        </View>
    )
}