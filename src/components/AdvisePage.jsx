import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";

import StyledText from "./StyledText";
import RiskBar from "./RiskBar";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 900,
  },
  body: {
    fontSize: 15,
    textAlign: "justify",
    paddingEnd: 10,
  },
  smallHeader: {
    fontSize: 15,
    fontWeight: 900,
    paddingTop: 20,
    paddingBottom: 4,
  },
  mainContainer: {
    width: screenWidth * 0.9,
    alignItems: "flex-start",
    marginLeft: screenWidth * 0.06,
    marginTop: screenHeight * 0.1,
    paddingBottom: screenHeight * 0.15,
  },
});

export default function AdvisePage() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <StyledText style={styles.header}>What's UVR?</StyledText>
        <StyledText style={styles.body}>
          Ultraviolet radiation (UVR) composes part of the energy we get from
          the Sun. It is the main responsible for the consequences of Sun
          radiation on human health. {"\n"}
          {"\n"}
          The lack of exposure makes a difference on vitamin D levels, which
          have been proven important. They have consequences on things such as
          bone and muscle mass or avoiding malfunction of the immune system.
          {"\n"}
          {"\n"}
          On the other hand, overexposure may lead to negative consequences. A
          high enough exposure damages the skin and sight, leading to diseases
          such as cancer.
          {"\n"}
          {"\n"}
        </StyledText>
        <StyledText style={styles.header}>What does the index mean?</StyledText>
        <StyledText style={styles.body}>
          The World Health Organization (WHO) created the Global Solar UV Index
          (UVI). It quantifies the UVR and its potential for skin damage. Its
          goal is to raise public concern about sun exposure implications, since
          it is steadily becoming a bigger of a health problem.
          {"\n"}
          {"\n"}
          It can take any value from zero and upwards:
        </StyledText>
        <StyledText style={styles.smallHeader}>
          &#8226; Values from 0 to 2: Low
        </StyledText>
        <StyledText style={styles.body}>
          Low danger for the average person.
          {"\n"}
        </StyledText>
        <RiskBar value={1} />
        <StyledText style={styles.smallHeader}>
          &#8226; Values from 3 to 5: Moderate
        </StyledText>
        <StyledText style={styles.body}>
          Try to stay in shade near noon. Wear clothes and apply sunscreen.
          {"\n"}
        </StyledText>
        <RiskBar value={4} />
        <StyledText style={styles.smallHeader}>
          &#8226; Values from 6 to 7: High
        </StyledText>
        <StyledText style={styles.body}>
          Seek shade during midday hours. Wear clothes and apply sunscreen.
          {"\n"}
        </StyledText>
        <RiskBar value={6} />
        <StyledText style={styles.smallHeader}>
          &#8226; Values from 8 to 10: Very high
        </StyledText>
        <StyledText style={styles.body}>
          Try to avoid being outside during midday hours. Clothing and sunscreen
          should be a must.
          {"\n"}
        </StyledText>
        <RiskBar value={9} />
        <StyledText style={styles.smallHeader}>
          &#8226; Greater values: Extreme
        </StyledText>
        <StyledText style={styles.body}>
          Avoid being outside during heavy exposure hours. Clothing and
          sunscreen are a must!
          {"\n"}
        </StyledText>
        <RiskBar value={12} />
      </View>
    </ScrollView>
  );
}
