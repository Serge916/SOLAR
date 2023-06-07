import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const styles = StyleSheet.create({
  numberContainer: {
    backgroundColor: "green",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    alignContent: "flex-end",
  },
});

export default function NumberItem({ dayNumber }) {
  const [riskColor, setRiskColor] = useState("green");
  const value = 3;
  useEffect(() => {
    if (value > 2) {
      setRiskColor(theme.colors.highRisk);
    } else if (value > 1) {
      setRiskColor(theme.colors.mildRisk);
    } else if (value > 0) {
      setRiskColor(theme.colors.lowRisk);
    } else {
      setRiskColor("#00000000");
    }
  }, []);
  return (
    <View style={[styles.numberContainer, { backgroundColor: riskColor }]}>
      <StyledText bold style={styles.number}>
        {dayNumber}
      </StyledText>
    </View>
  );
}
