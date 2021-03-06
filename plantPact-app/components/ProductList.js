import React from 'react';
import { FlatList } from 'react-native'

import ProductCard from './ProductCard'

export default class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.cardRefs = []
  }

  scrollToIndex(index) {
    this.flatListRef.scrollToIndex({animated: true, index: index})
  }

  setSelectedCard(key) {
    this.cardRefs.forEach(ref => ref.setSelected(key))
  }

  render() {
    if (this.props.horizontal) {
      return (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) =>
            <ProductCard
              {...item}
              onSelectProduct={this.props.onSelectProduct}
              onSelectDetails={this.props.onSelectProductDetails}
              index={item.key}
              ref={(ProductCard) => {this.cardRefs[item.key] = ProductCard}}
            />
          }
          data={this.props.data}
          ref={(ref) => {this.flatListRef = ref}}
        />
      )
    } else {
      return (
        <View/>
      )
    }
  }
}
