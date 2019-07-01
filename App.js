import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as firebase from 'firebase';

import AppNavigator from './navigation/AppNavigator';


export const AppContext = React.createContext();

const firebaseConfig = {
  apiKey: "AIzaSyDGjcP2WYy8aQsntCOazflT-ZGUujsoOEs",
  authDomain: "smart-pack.firebaseapp.com",
  databaseURL: "https://smart-pack.firebaseio.com",
  projectId: "smart-pack",
  storageBucket: "smart-pack.appspot.com",
  messagingSenderId: "428269974038",
  appId: "1:428269974038:web:e0c45949c9615009"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class AppWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
    };
  }
  updateItems = () => {

  };
  pushItem = () => {

  };

  render(){
    return (
      <AppContext.Provider value={{
        ...this.state,
        updateItems: this.updateItems,
        pushItems: this.pushItem
      }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <AppWrapper>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </AppWrapper>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'open-sans-300': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-600': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    }),
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
});
