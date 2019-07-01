import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Lottie from 'lottie-react-native'
import TouchableOpacity from 'react-native-web/dist/exports/TouchableOpacity';

export default class Index extends Component {
  componentDidMount() {
    this.animation.play(72, 100);
    // Or set a specific startFrame and endFrame with:
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    console.log('======>');
    const received = this.props.navigation.getParam('received', '0');
    const total = this.props.navigation.getParam('total', '0');
    console.log(typeof received);
    console.log(total);
    return (
      <View style={styles.root}>
        <View style={styles.rect3}>
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: '100%',
              height: 250,
              backgroundColor: "rgba(74,144,226,1)",
            }}
            speed={0.8}
            source={require('./animation-w1000-h1000')}
          />
        </View>
        <View style={styles.rect4}>
          <Text style={styles.text2}>Yay! You earned points</Text>
        </View>
        <View style={styles.TotalPointsWrapper}>
          <View style={styles.TotalPointsContainer}>
            <Text style={styles.TotalPointsText}>{received} points</Text>
          </View>
        </View>
        <View style={styles.rect8}>
          <View style={styles.EarnedPointsContainer}>
            <Text style={styles.EarnedPointsText}>
              My Total points earned: {total + received}
            </Text>
          </View>
        </View>
        <View style={{ alignSelf:'center', justifyContent: 'center', alignContent: 'center' }}>
          <Button onPress={() => {this.props.navigation.navigate('Dashboard')}} title="Go to Dashboard" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 1
  },
  rect3: {
    height: 250.36,
    backgroundColor: "rgba(74,144,226,1)",
    flexDirection: "column",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },
  rect4: {
    height: 72.18,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  text2: {
    width: "100%",
    height: 34,
    color: "#121212",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "space-between",
    fontSize: 24,
    fontFamily: "open-sans-600",
    textAlign: "center"
  },
  TotalPointsWrapper: {
    height: 75.6,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  TotalPointsContainer: {
    width: 134.76,
    height: 46.02,
    backgroundColor: "rgba(231,241,255,1)",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  },
  TotalPointsText: {
    top: 11,
    left: 14.84,
    width: 105.08,
    height: 28,
    color: "rgba(134,47,239,1)",
    position: "absolute",
    flexDirection: "column",
    alignSelf: "stretch",
    justifyContent: "space-between",
    paddingTop: 0,
    fontSize: 18,
    fontFamily: "open-sans-600",
    textAlign: "center"
  },
  rect8: {
    height: 97.51,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  EarnedPointsContainer: {
    width: 218.03,
    height: 46.02,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderColor: "rgba(161,193,242,1)",
    borderWidth: 1,
    paddingTop:6,
  },
  EarnedPointsText: {
    height: 24.34,
    color: "#121212",
    alignSelf: "stretch",
    fontSize: 14,
    fontFamily: "open-sans-300",
    textAlign: "center"
  }
});
