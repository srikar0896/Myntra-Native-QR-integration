import React from 'react';
import {StatusBar, Platform, View} from 'react-native';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import LandingPage from '../src/apps/landingpage';
import Search from '../src/apps/search';
import PDP from '../src/apps/pdp';
import RewardsPage from '../src/apps/Rewards';
import Dashboard from '../src/apps/Dashboard';
import Scan from '../src/apps/Scan';
import BeforeScan from '../src/apps/BeforeScan';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  // createSwitchNavigator({
  //   Main: MainTabNavigator,
  // })
  createStackNavigator(
    {
      Rewards: {
        screen: RewardsPage,
        navigationOptions: () => ({
          header: null,
        }),
      },
      Scan: {
        screen: ({ navigation }) => (
          <Scan navigator={navigation} />
        ),
        navigationOptions: () => ({
          header: null,
        }),
      },
      Dashboard: {
        screen: Dashboard,
        navigationOptions: () => ({
          header: null,
        }),
      },
      Home: {
        screen: LandingPage,
        navigationOptions: () => ({
          header: null,
        }),
      },
      BeforeScan: {
        screen: BeforeScan,
        navigationOptions: () => ({
          title: '',
          headerStyle:{
            marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,
          },
        }),
      },
      Search: {
        screen: Search,
        navigationOptions: () => ({
          title: 'Search',
          headerStyle:{
            marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,
          },
        }),
      },
      PDP: {
        screen: PDP,
        navigationOptions: () => ({
          title: 'PDP',
          headerStyle:{
            marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,
          },
        }),
      },
    },
    {
      initialRouteName: 'Search',
    }
  )
);
