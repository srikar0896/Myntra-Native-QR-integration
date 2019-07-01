import Lottie from "lottie-react-native";
import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import * as firebase from 'firebase';
import History from './History';
import { O2A } from 'object-to-array-convert';
import Redeem from './Redeem';

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      activeTab: 'history',
      items: [],
      totalReward: 0,
      totalRewardFetchSuccess: false,
      itemsFetchSuccess: false,
    };
  }
  componentDidMount() {
    firebase.database().ref(`/users/1/companies/nike/trans`).on('child_added', function(data) {
      console.log('-->', data.val());
    });
    const that = this;
    firebase.database().ref(`/users/1/companies/nike/total_reward`).once('value', function(data) {
      that.setState({ totalReward: data.val(), totalRewardFetchSuccess: true });
    });

    firebase.database().ref(`/users/1/companies/nike/trans`).once('value', function(data){
      console.log('DATA!!!!!!!!!');
      const value = O2A(data);
      console.log('======""====', value);
      let itemsObj = value.reduce((acc1,e) => {
        return {
          ...acc1,
          ...Object.entries(e).reduce((acc, childArray, index) => {
            console.log('CHIld->', {
              [childArray[0] + (new Date).getTime()]: childArray[1],
            });
            return {
              ...acc,
              [childArray[0] + (new Date).getTime()]: childArray[1],
            }
          }, {})
        };
      }, {});
      const itemsArray = Object.entries(itemsObj).reduce((acc, i) => {
        return [
          ...acc,
          {
            id: i[0],
            ...i[1],
          }
        ];
      }, []);
      console.log('-------------=====*****=====',itemsArray);
      that.setState({
        items: itemsArray,
        itemsFetchSuccess: true,
      });
      // const obj = {[Object.entries(value[0])[0]] : Object.entries(value[0])[1]};
      // console.log('++--+', obj);
      // const totalReward = value[0];
      // const items = Object.values(value[1]);
      // console.log('VAL->', items[0].val());
    });
  }

  toggleTab = (tab) => {
    this.setState({
      activeTab: tab,
    });
  };

  render() {
    console.log(this.props);
    const { activeTab, items, itemsFetchSuccess, totalRewardFetchSuccess } = this.state;

    return (
      <View style={styles.root}>
        {
          !itemsFetchSuccess || !totalRewardFetchSuccess ? (
            <View style={{ width: '100%', height: '100%', flex:1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <>
              <View style={styles.rect2}>
                <View style={styles.rect4}>
                  <Icon
                    style={styles.icon2}
                    type="MaterialCommunityIcons"
                    name="chevron-left"
                  />
                  <Text style={styles.text6}>Profile</Text>
                  <Icon style={styles.icon3} type="Entypo" name="share" />
                </View>
                <View style={styles.rect5}>
                  <Icon style={styles.icon4} type="EvilIcons" name="user" />
                  <View style={styles.rect8}>
                    <Text style={styles.text}>Mayank</Text>
                  </View>
                  <View style={styles.rect7}>
                    <Text style={styles.text2}>Silver level</Text>
                  </View>
                  <View style={styles.rect6}>
                    <Text style={styles.text5}>{this.state.totalReward}</Text>
                    <View style={styles.rect11}>
                      <Icon
                        style={styles.icon}
                        type="MaterialCommunityIcons"
                        name="star-circle"
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.rect12}>
                  <TouchableOpacity style={styles.rect13} onPress={() => this.toggleTab('history')}>
                    <Text style={{
                      ...styles.text7,
                      color: activeTab === 'history' ? 'black' : "rgba(122,130,166,1)",
                      fontFamily: activeTab === 'history' ? "open-sans-600" : "open-sans-300",
                    }}>History</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rect14} onPress={() => this.toggleTab('rewards')}>
                    <Text style={{
                      ...styles.text7, color: activeTab === 'rewards' ? 'black' : "rgba(122,130,166,1)",
                      fontFamily: activeTab === 'rewards' ? "open-sans-600" : "open-sans-300",
                    }}
                    >Rewards</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.rect15} onPress={() => this.toggleTab('leadership')}>
                    <Text
                      style={{...styles.text7, color: activeTab === 'leadership' ? 'black' : "rgba(122,130,166,1)",
                        fontFamily: activeTab === 'leadership' ? "open-sans-600" : "open-sans-300",
                      }}>Leadership</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flex: 1, height: '100%', width: '100%', backgroundColor: '#F5F8FF' }}>
                {
                  this.state.activeTab === 'history' && (<History items={items}/>)
                }
                {
                  this.state.activeTab === 'rewards' && (<Redeem navigation={this.props.navigation}/>)
                }
              </View>
            </>
          )
        }
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
