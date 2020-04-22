import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, State} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavourite} from '../store/actions/actions';

const MealDetailsScreen = props => {
  const {route} = props;
  const MEALS = useSelector(State => State.meals.filteredMeals);
  const selectedMeal = MEALS.find(meal => meal.id === route.params.id);

  const dispatch = useDispatch();
  const toggleFavouriteHandler = () => {
    dispatch(toggleFavourite(selectedMeal.id));
  };
  const currMealFav = useSelector(State =>
    State.meals.favouriteMeals.some(meal => meal.id === selectedMeal.id),
  );

  useEffect(() => {
    props.navigation.setParams({
      toggle: toggleFavouriteHandler,
    });
  }, [selectedMeal]);

  useEffect(() => {
    props.navigation.setParams({
      isFav: currMealFav,
    });
  }, [currMealFav]);
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.img}>
          <Image
            source={{uri: selectedMeal.imageUrl}}
            style={{width: '100%', height: 200, borderRadius: 10}}
          />
          <View style={styles.titles}>
            <Text>{selectedMeal.duration} M</Text>
            <Text>{selectedMeal.complexity}</Text>
            <Text>{selectedMeal.affordability}</Text>
          </View>
          <View>
            <Text style={styles.heading}>INGREDIENTS</Text>
            {selectedMeal.ingredients.map((ingredient, index) => {
              return (
                <Text key={index} style={styles.ingredient}>
                  {ingredient}
                </Text>
              );
            })}
          </View>
          <View>
            <Text style={styles.heading}>STEPS</Text>
            {selectedMeal.steps.map((ingredient, index) => {
              return (
                <Text key={index} style={styles.ingredient}>
                  {ingredient}
                </Text>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
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
