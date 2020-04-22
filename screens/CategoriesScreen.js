import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoriesScreen = props => {
  const rederGridItem = itemData => {
    return (
      <View style={styles.gridItem}>
        <TouchableNativeFeedback
          onPress={() =>
            props.navigation.navigate('CategoryMealsScreen', {
              name: `${itemData.item.title}`,
              Id: itemData.item.id,
              color: itemData.item.color,
            })
          }>
          <View
            style={{...styles.container, backgroundColor: itemData.item.color}}>
            <Text numberOfLines={2} style={styles.title}>
              {itemData.item.title}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={rederGridItem} numColumns={2} />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 20,
    elevation: 3,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
