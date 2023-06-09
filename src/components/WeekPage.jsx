import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

import StyledText from "./StyledText";
import theme from "../theme";

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const values = [0, 0, 0, 0, 0, 0, 0];

const mockBarData = {
  labels: labels,
  datasets: [
    {
      data: values,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0,
  color: () => theme.colors.secondary,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.8,
  showValuesOnTopOfBars: true,
  withHorizontalLabels: true,
  barRadius: 8,
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  barObj: {
    justifyContent: "center",
    gap: 60,
    alignItems: "center",
    flex: 1,
  },
  bars: {
    padding: 15,
    top: screenHeight * 0.02,
    right: screenWidth * 0.085,
  },
  barContainer: {
    backgroundColor: `${theme.colors.white}FF`,
    borderColor: "#0000000F",
    borderWidth: 1.5,
    borderRadius: 100,
  },
  legend: {},
});

export default function WeekPage({ useSQLite }) {
  const [barData, setBarData] = useState(mockBarData);

  useEffect(() => {
    let valueList = [...values];
    let labelList = [...labels];
    const rightNow = new Date();
    for (const [key, value] of Object.entries(useSQLite.monthData.data)) {
      if (rightNow - value.dayRecord < 604800000) {
        //ms in a week (7 days)
        const newDate = new Date(value.dayRecord);
        valueList[newDate.getDay() - 1] = value.value;
      }
    }
    const newData = {
      labels: labelList,
      datasets: [
        {
          data: valueList,
        },
      ],
    };
    setBarData(newData);
  }, []);

  return (
    <View style={styles.barObj}>
      <StyledText header bold style={{}}>
        Week report
      </StyledText>
      <View style={styles.barContainer}>
        <BarChart
          style={styles.bars}
          data={barData}
          width={screenWidth}
          height={screenHeight / 2}
          yAxisLabel={"$"}
          chartConfig={{ ...chartConfig, propsForVerticalLabels: {} }}
          showValuesOnTopOfBars={true}
          withHorizontalLabels={false}
          showBarTops={true}
          withInnerLines={false}
        />
      </View>
    </View>
  );
}
