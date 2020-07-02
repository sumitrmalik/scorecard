import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.button1RowColumn}>
        <View style={styles.button1Row}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Untitled")}
            style={styles.button1}
          >
            <Text style={styles.teamA}>Team A</Text>
            <Text style={styles.score1}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.teamB}>Team B</Text>
            <Text style={styles.score2}>0</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Scorecard")}
          style={styles.button3}
        >
          <Text style={styles.reset}>RESET</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.scoreboard}>SCOREBOARD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(244,174,20,1)"
  },
  button1: {
    width: 156,
    height: 314,
    backgroundColor: "rgba(230,230,230,0.5)",
    borderRadius: 15
  },
  teamA: {
    fontFamily: "verdana-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 65,
    marginLeft: 34
  },
  score1: {
    fontFamily: "verdana-regular",
    color: "#121212",
    fontSize: 96,
    marginTop: 48,
    marginLeft: 48
  },
  button2: {
    width: 156,
    height: 314,
    backgroundColor: "rgba(230,230,230,0.5)",
    borderRadius: 15,
    marginLeft: 17
  },
  teamB: {
    fontFamily: "verdana-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 65,
    marginLeft: 33
  },
  score2: {
    fontFamily: "verdana-regular",
    color: "#121212",
    fontSize: 96,
    marginTop: 48,
    marginLeft: 47
  },
  button1Row: {
    height: 314,
    flexDirection: "row"
  },
  button3: {
    width: 149,
    height: 47,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 50,
    marginTop: 122,
    marginLeft: 91
  },
  reset: {
    fontFamily: "verdana-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: 9,
    marginLeft: 35
  },
  button1RowColumn: {
    marginTop: 264,
    marginLeft: 22,
    marginRight: 24
  },
  title: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 20,
    flex: 1,
    marginBottom: 570,
    marginTop: -631,
    marginLeft: 22,
    marginRight: 24
  },
  scoreboard: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 42,
    textAlign: "center",
    marginTop: 34,
    marginLeft: 22
  }
});

export default Home;
