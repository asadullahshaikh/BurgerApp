import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import MealItems from '../components/MealItems';
import {useSelector} from 'react-redux';

const CartogeryMeal = ({route, navigation}) => {
  const MEALS = useSelector(state => state.meals.filteredMeals);
  const selectedCategory = CATEGORIES.find(item => item.id === route.params.Id);
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(route.params.Id) >= 0,
  );
  console.log(displayedMeals, route.params.Id);

  const renderMealItem = itemData => {
    return (
      <MealItems
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        onSelect={() =>
          navigation.navigate('MealDetailsScreen', {
            id: itemData.item.id,
            title: `${itemData.item.title}`,
            color: route.params.color,
          })
        }
      />
    );
  };
  if (displayedMeals.length === 0) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Text>Check your filters! </Text>
      </View>
    );
  }
  return (
    <View style={{alignItems: 'center'}}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
        style={{width: '95%'}}
      />
    </View>
  );
};

export default CartogeryMeal;
