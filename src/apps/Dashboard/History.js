import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import MaterialList8 from './MaterialList8';

export default class Index extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
          horizontal={false}
        >
          <MaterialList8 items={this.props.items} style={styles.materialList8} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  scrollArea: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    flexDirection: "column",
    right: 0,
    bottom: 0
  },
  materialList8: {
    flex: 1,
    alignSelf: "stretch",
    overflow: "scroll"
  },
  scrollArea_contentContainerStyle: {
    width: '100%',
    height: '100%',
  }
});
