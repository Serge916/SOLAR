import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
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
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0.5,

  color: (opacity = 1) => `#023047`,
  labelColor: (opacity = 1) => `#333`,
  strokeWidth: 2,

  useShadowColorFromDataset: false,
  decimalPlaces: 0,
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
  },
  titleContainer: {
    alignSelf: "center",
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
        Daily report
      </StyledText>
      <View>
        <LineChart
          data={chartData}
          width={screenWidth}
          height={220} //CAmbiar por relativo
          chartConfig={chartConfig}
          center={[0, 0]}
        />
      </View>
    </View>
  );
}
