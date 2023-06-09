import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

function useSQLite() {
  const db = SQLite.openDatabase("testSolarDB.db");
  const [dayData, setDayData] = useState({
    data: [
      { timeRecord: 1686003219, value: 1 },
      { timeRecord: 1686003249, value: 2 },
      { timeRecord: 1686003279, value: 4 },
      { timeRecord: 1686003309, value: 9 },
    ],
  });
  const [monthData, setMonthData] = useState({ data: null });
  const [lastUpdate, setLastUpdate] = useState({
    data: [{ timeStamp: 2686003309000 }],
  });

  useEffect(() => {
    console.log("Checking for existing table");
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS day (timeRecord INT, value INT);",
        null,
        (txObj, mssg) => console.log("Concerning Day Table:", mssg),
        (txObj, error) => console.log("Error", error)
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS month (dayRecord INT, value INT);",
        null,
        (txObj, mssg) => console.log("Concerning Month Table:", mssg),
        (txObj, error) => console.log("Error", error)
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS updateRecord (timeStamp INT);",
        null,
        (txObj, mssg) => console.log("Concerning updateRecord Table", mssg),
        (txObj, error) => console.log("Error", error)
      );
    });
    fetchData();
  }, []);

  const fetchData = async () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM day",
        null,
        (txObj, { rows: { _array } }) => setDayData({ data: _array }),
        (txObj, error) => console.log("Error ", error)
      );
      tx.executeSql(
        "SELECT * FROM month",
        null,
        (txObj, { rows: { _array } }) => setMonthData({ data: _array }),
        (txObj, error) => console.log("Error ", error)
      );
      tx.executeSql(
        "SELECT * FROM updateRecord",
        null,
        (txObj, { rows: { _array } }) => setLastUpdate({ data: _array }),
        (txObj, error) => console.log("Error ", error)
      );
      updateMonth();
    });

    console.log("Fetched day: ", dayData);
    console.log("Fetched month: ", monthData);
    console.log("Fetched lastUpdate: ", lastUpdate);
  };

  const updateMonth = async () => {
    const rightNow = Date.now();
    let totalValue = 0;
    let flag =
      (lastUpdate.data[0] === undefined ? false : true) &&
      (rightNow - new Date(lastUpdate.data[0].timeStamp).getTime() > 86400000
        ? false
        : true); //Flag indicates if day should be updated
    //24*60*60*1000 ms in a day
    if (!flag) {
      dayData.data.map((day) => {
        totalValue += day.value;
      });
      console.log("UPDATING MONTH");
      try {
        db.transaction((tx) => {
          tx.executeSql(
            "INSERT INTO month values (?,?)",
            [rightNow - 86400000, totalValue],
            (txObj, msg) => console.log("Success adding month data.", msg),
            (txObj, error) => console.log("Error adding month data", error)
          );
          // Delete the whole table to avoid buggy situations
          tx.executeSql(
            "DELETE FROM updateRecord",
            null,
            (txObj, msg) => console.log("Success deleting updateRecord.", msg),
            (txObj, error) => console.log("Error deleting updateRecord.", error)
          );
          //Insert the time of last update
          tx.executeSql(
            "INSERT INTO updateRecord values (?)",
            [rightNow],
            (txObj, msg) => {
              setLastUpdate({ data: [{ timeStamp: rightNow }] });
              console.log("Success", msg);
            },
            (txObj, error) => console.log("Error", error)
          );
          tx.executeSql(
            "DELETE FROM day",
            null,
            (txObj, msg) => console.log("Successfully erased day table!", msg),
            (txObj, error) => console.log("Error", error)
          );
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const addDayData = (reading) => {
    console.log("Adding to the DB with value: ", reading);
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO day values (?, ?)",
        [(Date.now() / 1000).toFixed(0), reading],
        (txObj, msg) => console.log("Success adding day data.", msg),
        (txObj, error) => console.log("Error adding day data.", error)
      );
    });
    fetchData();
  };

  const eraseAllData = () => {
    console.log("CLEAR from useSQLite!");
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM day",
        null,
        (txObj, msg) => console.log("Success clearing DayDB.", msg),
        (txObj, error) => console.log("Error clearing DayDB.", error)
      );
      tx.executeSql(
        "DELETE FROM month",
        null,
        (txObj, msg) => console.log("Success clearing MonthDB.", msg),
        (txObj, error) => console.log("Error clearing MonthDB.", error)
      );
      tx.executeSql(
        "DELETE FROM updateRecord",
        null,
        (txObj, msg) => console.log("Success clearing updateRecord.", msg),
        (txObj, error) => console.log("Error clearing updateRecord.", error)
      );
    });
  };

  const runSQL = () => {
    db.transaction((tx) => {
      // tx.executeSql(
      //   "INSERT INTO month values (?, ?)",
      //   [1686129308 * 1000 - 86400000, 250],
      //   (txObj, { rows: { _array } }) => console.log({ data: _array }),
      //   (txObj, error) => console.log("Error", error)
      // );
      tx.executeSql(
        "DELETE FROM day",
        null,
        (txObj, msg) => console.log("Success", msg),
        (txObj, error) => console.log("Error", error)
      );
    });
    // console.log(dayData);
  };
  return {
    addDayData,
    fetchData,
    eraseAllData,
    dayData,
    monthData,
    runSQL,
  };
}

export default useSQLite;
