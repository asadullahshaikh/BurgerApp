import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import MealItems from '../components/MealItems';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  const fav = useSelector(state => state.meals.favouriteMeals);

  const renderItems = ItemsData => {
    return (
      <MealItems
        title={ItemsData.item.title}
        duration={ItemsData.item.duration}
        affordability={ItemsData.item.affordability}
        complexity={ItemsData.item.complexity}
        image={ItemsData.item.imageUrl}
        onSelect={() =>
          props.navigation.navigate('MealDetailsScreen', {
            id: ItemsData.item.id,
            title: `${ItemsData.item.title}`,
            color: 'grey',
          })
        }
      />
    );
  };
  if (fav.length === 0 || !fav) {
    return (
      <View style={styles.fav}>
        <Text>Add your favourite meal </Text>
      </View>
    );
  }
  return <FlatList data={fav} renderItem={renderItems} key={key => key} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  fav: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    padding: 10,
  },
  img: {},
  titles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 10,
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center',
  },
  ingredient: {
    borderWidth: 2,
    height: 30,
    padding: 5,
    margin: 5,
    textAlign: 'center',
  },
});
