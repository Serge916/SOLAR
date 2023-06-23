import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet, Alert } from "react-native";
import { LineChart } from "react-native-chart-kit";

import StyledText from "./StyledText";
import theme from "../theme";

const mockChartData = {
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 65],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,

  color: () => theme.colors.secondary,
  // labelColor: (opacity = 1) => `#333`,
  strokeWidth: 3,

  useShadowColorFromDataset: false,
  decimalPlaces: 0,
  propsForDots: {
    r: "2",
    strokeWidth: "4",
    stroke: theme.colors.accent,
  },
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
    gap: 60,
    alignItems: "center",
    flex: 1,
  },
  titleContainer: {
    alignSelf: "center",
  },
  lineContainer: {
    backgroundColor: `${theme.colors.white}FF`,
    borderColor: "#0000000F",
    borderWidth: 1.5,
    borderRadius: 100,
    alignItems: "center",
  },
  lines: {
    padding: 15,
    top: screenHeight * 0.02,
    right: screenWidth * 0.04,
  },
});

export default function DayPage({ useSQLite }) {
  const [chartData, setChartData] = useState(mockChartData);

  useEffect(() => {
    let valueList = [];
    let labelList = [];
    for (const [key, value] of Object.entries(useSQLite.dayData.data)) {
      valueList = valueList.concat(value.value);
      const newDate = new Date(value.timeRecord * 1000);
      labelList = labelList.concat(newDate.getHours());
    }
    const newData = {
      labels: labelList,
      datasets: [
        {
          data: valueList,
        },
      ],
    };
    setChartData(newData);
  }, []);

  return (
    <View style={styles.container}>
      <StyledText header bold style={styles.titleContainer}>
        Today's exposure
      </StyledText>
      <View style={styles.lineContainer}>
        <LineChart
          data={chartData}
          width={screenWidth}
          height={screenHeight / 2}
          chartConfig={chartConfig}
          withInnerLines={false}
          bezier //Bezier o no??
          style={styles.lines}
        />
      </View>
    </View>
  );
}
