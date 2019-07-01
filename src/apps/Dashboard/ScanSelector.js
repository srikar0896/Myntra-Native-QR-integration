import React, { Component } from "react";
import MaterialHeader1 from "../symbols/MaterialHeader1";
import Icon from "@builderx/icons";
import MaterialButtonPrimary from "../symbols/MaterialButtonPrimary";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Icon
          style={styles.icon}
          type="Ionicons"
          name="md-checkmark-circle-outline"
        />
        <Icon
          style={styles.icon2}
          type="Ionicons"
          name="md-checkmark-circle-outline"
        />
        <Icon style={styles.icon3} type="Ionicons" name="md-checkmark-circle" />
        <Icon style={styles.icon4} type="Ionicons" name="md-tv" />
        <Icon style={styles.icon5} type="Ionicons" name="ios-briefcase" />
        <Icon style={styles.icon6} type="Ionicons" name="logo-euro" />
        <Text style={styles.text2}>Loyality points</Text>
        <Text style={styles.text3}>Gamification</Text>
        <Text style={styles.text4}>Product info</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 0
  },
  rect: {
    top: 0.37,
    left: 0,
    width: 360,
    height: 226.75,
    position: "absolute"
  },
  materialHeader1: {
    width: 360,
    height: 61,
    position: "absolute",
    left: 0,
    top: 0.37,
    backgroundColor: "rgba(236,20,199,1)"
  },
  rect2: {
    top: 140.42,
    width: 325.12,
    height: 283.44,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.28,
    left: "4.84%"
  },
  text: {
    top: 88.74,
    left: 101.94,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  icon: {
    top: 190.44,
    left: 42.05,
    position: "absolute",
    color: "rgba(122,130,166,1)",
    fontSize: 25
  },
  icon2: {
    top: 256.14,
    left: 42.05,
    position: "absolute",
    color: "rgba(122,130,166,1)",
    fontSize: 26
  },
  icon3: {
    top: 328.99,
    left: 42.05,
    position: "absolute",
    color: "rgba(116,130,166,1)",
    fontSize: 27,
    opacity: 0.41
  },
  icon4: {
    top: 182.94,
    left: 84.44,
    position: "absolute",
    color: "rgba(116,130,166,1)",
    fontSize: 40
  },
  icon5: {
    top: 249.14,
    left: 84.44,
    position: "absolute",
    color: "rgba(116,130,166,1)",
    fontSize: 40
  },
  icon6: {
    top: 322.49,
    left: 84.44,
    position: "absolute",
    color: "rgba(116,130,166,1)",
    fontSize: 40,
    opacity: 0.51
  },
  text2: {
    top: 191.94,
    left: 153.76,
    position: "absolute",
    color: "rgba(122,130,166,1)",
    fontSize: 22,
    fontWeight: "bold"
  },
  text3: {
    top: 260.14,
    left: 153.76,
    position: "absolute",
    color: "rgba(116,130,166,1)",
    fontSize: 22,
    fontWeight: "bold"
  },
  text4: {
    top: 331.49,
    left: 153.76,
    position: "absolute",
    color: "rgba(122,130,166,1)",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left"
  },
  materialButtonPrimary: {
    width: 280.18,
    height: 57.82,
    position: "absolute",
    left: 39.89,
    top: 557.26,
    shadowOpacity: 0.68,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 5,
    elevation: 15,
    borderRadius: 32,
    backgroundColor: "rgba(251,59,225,1)"
  }
});
