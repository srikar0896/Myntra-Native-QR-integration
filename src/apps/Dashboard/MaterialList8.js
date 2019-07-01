import React, { Component } from "react";
import { View, StyleSheet, FlatList, Image, Text } from "react-native";
const data = [
  {
    name: 'Nike Odessey React',
    date: '21 July, 2019',
    path: 'https://img.tatacliq.com/images/i3/252Wx374H/MP000000003942662_252Wx374H_20181118092425.jpeg',
    id: 1,
  },
  {
    name: 'Nike Epic React',
    path: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/4330929/2018/5/11/551e0242-9544-4295-98a6-9699309af27d1526036288761-Mens-Nike-Flex-Control-II-Training-Shoe-3341526036288545-1.jpg',
    date: '2 Feb, 2019',
    id: 3,
  },
  {
    name: 'Nike Jordans',
    path: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8194089/2019/1/10/4eb3522e-992e-48af-8ade-d43e2c9c91881547117520610-Nike-Men-Black-Leather-Air-Jordan-1-Mid-Top-Basketball-Shoes-1.jpg',
    date: '7 April, 2019',
    id: 2,
  },
  {
    name: 'Nike Air Max',
    path: 'https://media.hypedc.com/media/catalog/product/cache/1/small_image/375x/9df78eab33525d08d6e5fb8d27136e95/3/2/325213-137_1_baseline.jpg',
    date: '31 Dec, 2018',
    id: 5,
  },
  {
    name: 'Nike Air Jordan',
    path: 'https://www.nike.com/VO/XX_XX/e/content/dam/jordan/air-jordan-collection/images/collection/0022/aj_i_retro_high_og_nrg-861428-100_a1_lateral-t.png',
    date: '12 Jan, 2019',
    id: 4,
  },
];

export default class MaterialList8 extends Component {
  render() {
    const { items } = this.props;
    console.log('ITEMS', items);
    console.dir(items);
    console.log(Object.entries(items));
    return (
      <View style={[styles.root, this.props.style]}>
        <FlatList
          style={styles.list}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect}>
                <Image
                  style={styles.avatarImageStyle}
                  source={{ uri: item.path }}
                />
                <View style={styles.contentColor}>
                  <Text style={styles.rowPrimaryText}>{item.name}</Text>
                  <Text style={styles.rowSecondaryText} numberOfLines={1}>
                    ₹{item.price} - ✪{item.received_rewards}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F5F8FF",
    paddingTop: 8
  },
  list: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  rect: {
    flexDirection: "row",
    paddingLeft: 16,
    alignItems: "center",
    height: 72,
    backgroundColor: "#F5F8FF",
  },
  avatarImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: "#CCCCCC"
  },
  contentColor: {
    position: "absolute",
    left: 72,
    right: 0,
    paddingRight: 16,
    height: 72,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#BDBDBD"
  },
  rowPrimaryText: {
    color: "#212121",
    fontSize: 16,
    paddingBottom: 8
  },
  rowSecondaryText: {
    color: "#9E9E9E",
    fontSize: 13
  }
});
