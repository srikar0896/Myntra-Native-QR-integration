import Lottie from "lottie-react-native";
import React, { Component } from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from "react-native";

export default class Index extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.animation.play(0, 149);
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={{ height: '80%', width: '100%', }}>
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: '100%',
              height: '100%',
            }}
            loop={false}
            speed={0.8}
            source={require('./animation')}
            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
          />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Button style={{ alignSelf: 'center' }} title="Continue" onPress={() => this.props.navigation.navigate('Scan')} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F5F8FF",
    flexDirection: "column",
    flex: 1
  },
  rect2: {
    height: 327.66,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "column",
    alignSelf: "stretch",
    borderRadius: 1,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18
  },
  rect4: {
    height: 53.46,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    paddingTop: 5,
    paddingRight: 6,
    paddingLeft: 6
  },
  icon2: {
    color: "rgba(56,64,100,1)",
    fontSize: 33,
    alignSelf: "center",
    margin: 0,
    height: 33,
    width: 33
  },
  text6: {
    width: '83%',
    height: 26.81,
    color: "#121212",
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center"
  },
  icon3: {
    color: "rgba(56,64,100,1)",
    fontSize: 22,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "center",
    height: 22,
    width: 22
  },
  rect5: {
    height: 225.93,
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 0,
    paddingBottom: 0
  },
  icon4: {
    color: "rgba(148,160,193,1)",
    fontSize: 75,
    marginBottom: 6
  },
  rect8: {
    height: 18,
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5
  },
  text: {
    top: -2,
    height: 22,
    color: "rgba(56,64,100,1)",
    alignSelf: "stretch",
    marginBottom: 10,
    fontSize: 20,
    fontFamily: "open-sans-600",
    lineHeight: 22
  },
  rect7: {
    height: 14,
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    color: "rgba(56,64,100,1)",
    alignSelf: "stretch",
    fontSize: 14,
    height: 20,
    fontFamily: "open-sans-300"
  },
  rect6: {
    height: 33.48,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    marginTop: 39,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 12,
    borderRadius: 16
  },
  rect11: {
    width: 24.59,
    height: 22.7,
    flexDirection: "row",
    padding: 0,
    paddingTop: 1,
    paddingBottom: 20,
    paddingLeft: -20,
    marginLeft: 2,
  },
  icon: {
    color: "rgba(253,143,37,1)",
    fontSize: 20,
    width: 24.59,
    height: 22.7,
    overflow: "visible"
  },
  rect9: {
    width: 56.19,
    height: 18,
    flexDirection: "row",
    paddingBottom: 20,
    marginLeft: -20,
  },
  text5: {
    color: "rgba(56,64,100,1)",
    fontSize: 18,
    fontFamily: "open-sans-600"
  },
  rect12: {
    height: 42.77,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    borderRadius: 1,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16
  },
  rect13: {
    width: 82.84,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  text7: {
    color: "rgba(122,130,166,1)",
    fontSize: 15,
    fontFamily: "open-sans-600"
  },
  rect14: {
    width: 82.84,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  },
  rect15: {
    width: 82.84,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center"
  }
});
