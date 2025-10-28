import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const loadFonts = () => {
  return Font.loadAsync({
    Blanco: require("./assets/fonts/Blanco-Regular.otf"),
    "Blanco-Bold": require("./assets/fonts/Blanco-Bold.otf"),
    "ChiswickSansText-Regular": require("./assets/fonts/ChiswickSansText-Regular.otf"),
    "ChiswickSansText-Semibold": require("./assets/fonts/ChiswickSansText-Semibold.otf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.eyebrow}>WELCOME TO</Text>
      <Text style={styles.headline}>Coasteria Travel</Text>

      <Text style={styles.subheadline}>
        We’re a modern travel agency with a twist—one that is thoughtfully
        designed, proactively inclusive, tech-driven and well, cool.
      </Text>

      <Text style={styles.body}>
        We make it dead simple for you to travel like an insider, with killer
        perks and data-driven recommendations—all for the same price as doing
        the heavy lifting yourself.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Destinations</Text>
        <Text style={styles.destination}>Santorini, Greece</Text>
        <Text style={styles.destination}>Kyoto, Japan</Text>
        <Text style={styles.destination}>Maui, Hawaii</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  eyebrow: {
    fontFamily: "ChiswickSansText-Semibold",
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: 14,
    marginBottom: 10,
  },
  headline: {
    fontFamily: "Blanco-Bold",
    fontSize: 40,
    lineHeight: 52,
  },
  subheadline: {
    fontFamily: "Blanco",
    fontSize: 18,
    lineHeight: 26,
    marginTop: 20,
  },
  body: {
    fontFamily: "ChiswickSansText-Regular",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 15,
  },
  section: {
    marginTop: 40,
  },
  sectionTitle: {
    fontFamily: "Blanco-Bold",
    fontSize: 24,
    marginBottom: 10,
  },
  destination: {
    fontFamily: "ChiswickSansText-Regular",
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 6,
  },
});
