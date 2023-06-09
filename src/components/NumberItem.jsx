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

export default function NumberItem({ dayNumber, dayValue }) {
  const [riskColor, setRiskColor] = useState("green");
  useEffect(() => {
    if (dayValue > 300) {
      setRiskColor(theme.colors.highRisk);
    } else if (dayValue > 200) {
      setRiskColor(theme.colors.mildRisk);
    } else if (dayValue > 100) {
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
