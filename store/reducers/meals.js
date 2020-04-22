import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVOURITE, SET_FILTERS} from '../actions/actions';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favouriteMeals.findIndex(
        meal => meal.id === action.mealId,
        console.log(existingIndex, 'eee'),
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favouriteMeals: updatedFavMeals};
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        console.log(meal, 'eemmme');

        return {...state, favouriteMeals: state.favouriteMeals.concat(meal)};
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFiltered = state.filteredMeals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedFiltered};
    default:
      return state;
  }
};
export default mealsReducer;
