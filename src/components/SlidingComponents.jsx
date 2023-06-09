import React, { useState } from "react";
import { Alert, Pressable, View } from "react-native";
import StyledText from "./StyledText";

import WeekPage from "./WeekPage";
import DayPage from "./DayPage";

export default function SlidingComponents({ useSQLite }) {
  const [position, setPosition] = useState(false);

  const pressAction = () => {
    setPosition(!position);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Pressable onPress={pressAction}>
          {position ? (
            <>
              <WeekPage useSQLite={useSQLite} />
            </>
          ) : (
            <>
              <DayPage useSQLite={useSQLite} />
            </>
          )}
        </Pressable>
      </View>
    </View>
  );
}
