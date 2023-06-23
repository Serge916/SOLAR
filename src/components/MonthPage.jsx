import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Dimensions } from "react-native";
import StyledText from "./StyledText";
import NumberItem from "./NumberItem";
import theme from "../theme";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  title: {},
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 5,
  },
  calendar: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "center",
    width: screenWidth * 0.9,
    rowGap: screenWidth * 0.1,
    padding: 10,
  },
  numberContainer: {
    alignItems: "flex-end",
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: "13%",
  },
});

const monthList = [
  { key: 1, name: "January", totalDays: 31 },
  { key: 2, name: "February", totalDays: 28 },
  { key: 3, name: "March", totalDays: 31 },
  { key: 4, name: "April", totalDays: 30 },
  { key: 5, name: "May", totalDays: 31 },
  { key: 6, name: "June", totalDays: 30 },
  { key: 7, name: "July", totalDays: 31 },
  { key: 8, name: "August", totalDays: 31 },
  { key: 9, name: "September", totalDays: 30 },
  { key: 10, name: "October", totalDays: 31 },
  { key: 11, name: "November", totalDays: 30 },
  { key: 12, name: "December", totalDays: 31 },
];

export default function MonthPage({ useSQLite }) {
  const [dayList, setDayList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("January");
  const [dayNumber, setDayNumber] = useState(31);
  const [mockList, setMockList] = useState([]);

  useEffect(() => {
    var newMockList = [];
    for (var i = 0; i < dayNumber; i++) {
      newMockList[i] = { key: i + 1, value: i + 1, indexUV: 0 };
    }
    setMockList(newMockList);

    let newList = [...newMockList];
    let monthNumber = 0;
    for (const [key, value] of Object.entries(useSQLite.monthData.data)) {
      const newDate = new Date(value.dayRecord);
      const dayPointer = newDate.getDate();

      newList[dayPointer - 1] = {
        key: dayPointer,
        indexUV: value.value,
        value: dayPointer,
      };
      monthNumber = newDate.getMonth();
    }
    setDayList(newList);
    setCurrentMonth(monthList[monthNumber].name);
    setDayNumber(monthList[monthNumber].totalDays);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <StyledText bold header style={styles.title}>
        Month report
      </StyledText>
      <View style={styles.innerContainer}>
        <StyledText
          bold
          style={{ fontSize: 30, color: theme.colors.secondary }}
        >
          {currentMonth}
        </StyledText>
        <View style={styles.calendar}>
          {dayList.map((day) => {
            return (
              <View style={styles.numberContainer} key={day.key}>
                <NumberItem
                  dayNumber={day.value}
                  dayValue={day.indexUV}
                ></NumberItem>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
