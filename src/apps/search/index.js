import React, { Component } from 'react';
import {
	StyleSheet,
	Text
} from 'react-native';
import Product from '../../components/Product';
import { FlatList } from '../../../node_modules/react-native-gesture-handler';
import { Fab, Icon, Root, View, Container, Header, Button, Content, ActionSheet } from "native-base";

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

var BUTTONS = [
  { text: "Loyality points", icon: "md-star", iconColor: "rgba(56,64,100,1)" },
  { text: "Gamification", icon: "md-medal", iconColor: "rgba(56,64,100,1)" },
  {text: 'Authenticity', icon: "md-lock", iconColor: "rgba(56,64,100,1)"},
  { text: "Product info", icon: "md-information-circle", iconColor: "rgba(56,64,100,1)" },
  { text: "Cancel", icon: "close", iconColor: "rgba(56,64,100,1)" }
];

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { products: null, active: false, };
        this.handlePress = this.handlePress.bind(this);
        this.fetchProducts = this.fetchProducts.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }
    
    componentDidMount () {
		this.fetchProducts();
    }

    handlePress (productData) {
        this.props.navigation.navigate('PDP', {
            data: productData,
        });
    }

    keyExtractor = (item) => item.styleid
    
    async fetchProducts() {
        this.setState({
            loading: true,
        });
        const { navigation } = this.props;
        // const query = navigation.getParam('query', '');
        let url = `http://developer.myntra.com/search/data/Shoes`;

        // Networking using fetch  & async-await
        // Read more: https://facebook.github.io/react-native/docs/network.html
        let response = await fetch(url, {
            method: 'GET',
        });
        let responseJson = await response.json();
        this.setState({
            loading: false,
            products: responseJson.data.results.products,
        });
    }

    renderItem ({ index, item }) {
		return (
			<Product
				productData={ item }
				position={ index }
				handlePress={ this.handlePress }
			/>
		);
	}

	render() {
        if (this.state.loading) {
            return (<View style={styles.container}>
                <Text style={styles.text}> loading... </Text>
            </View>);
        }
		return (
      <Root>
        <View>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF', zIndex: 999 }}
            position="bottomRight"
            onPress={() => {
              this.setState({active: !this.state.active});
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Select Campaign type"
                },
                () => {
                  this.props.navigation.navigate('BeforeScan');
                }
              )
            }}>
            <Icon name="md-qr-scanner" />
          </Fab>
          <FlatList
            contentContainerStyle={styles.listContainer}
            data={this.state.products}
            numColumns={2}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
            removeClippedSubviews
          />
        </View>
      </Root>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        paddingTop: 10,
      backgroundColor: "rgba(230, 230, 230,1)",
    },
    text: {
        color: '#94989f',
    },
});