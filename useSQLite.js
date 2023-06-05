import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

function useSQLite() {
  const db = SQLite.openDatabase("testSolarDB.db");
  const [dayData, setDayData] = useState({ data: null });
  useEffect(() => {
    console.log("Checking for existing table");
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS day (timeRecord INT, value INT);",
        (txObj, error) => console.log("Success", error),
        (txObj, error) => console.log("Error", error)
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS month (dayRecord INT, value INT);"
      );
    });
    fetchData();
  }, []);

  const fetchData = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM day",
        null,
        (txObj, { rows: { _array } }) => setDayData({ data: _array }),
        (txObj, error) => console.log("Error ", error)
      );
    });
    console.log("Fetched", dayData);
    return { dayData };
  };

  const addDayData = (reading) => {
    console.log("Adding to the DB with value: ", reading);
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO day values (?, ?)",
        [(Date.now() / 1000).toFixed(0), reading],
        (txObj, msg) => console.log("Success", msg),
        (txObj, error) => console.log("Error", error)
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
        (txObj, msg) => console.log("Success", msg),
        (txObj, error) => console.log("Error", error)
      );
      tx.executeSql(
        "DELETE FROM month",
        null,
        (txObj, msg) => console.log("Success", msg),
        (txObj, error) => console.log("Error", error)
      );
    });
  };
  return {
    addDayData,
    fetchData,
    eraseAllData,
    dayData,
  };
}

export default useSQLite;
