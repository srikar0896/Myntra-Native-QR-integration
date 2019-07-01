import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';
import { BarCodeScanner } from 'expo-barcode-scanner';

function getQueryStringValue (url, key) {
  return decodeURIComponent(url.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    console.log('MOUNT');
    console.log(this.props);
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}
      </View>
    );
  }

  addRewards = (companyId, itemId) => {
    const that = this;

    firebase.database().ref(`/companies/${companyId}/items/${itemId}`).once("value", function(itemReward) {
      console.log(itemReward.val());
      firebase.database().ref(`/users/1/companies/${companyId}/total_reward`).once("value", (totalRewards)=> {

        firebase.database().ref(`/users/1/companies/${companyId}/total_reward`).set(totalRewards.val() + itemReward.val().reward);
        const TransactionRef = firebase.database().ref(`/users/1/companies/${companyId}/trans`);
        const NewTransactionRef = TransactionRef.push();
        const {date, name, path, price, reward} = itemReward.val();
        NewTransactionRef.set({
          [itemId]: {
            date,
            name,
            path,
            price,
            received_rewards: reward,
          }
        }, () => {
          that.props.navigator.navigate('Rewards', { received: reward, total: totalRewards.val()});
        });
      });
    });
  };

  handleBarCodeScanned = async({ type, data }) => {
    this.setState({ scanned: true });
    let response = await fetch(data, {
      method: 'GET',
    });
    console.log(response.url);
    const companyId = getQueryStringValue(response.url, 'companyId');
    const itemId = getQueryStringValue(response.url, 'itemId');
    console.log(companyId, itemId);
    // firebase.database().ref(`/users/1/companies/${companyId}`).set({
    //   highscore: score
    // });
    this.addRewards(companyId, itemId);

    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}