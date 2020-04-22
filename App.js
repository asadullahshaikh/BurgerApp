import React from 'react';
import {View, Text} from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import mealReducer from './store/reducers/meals';
const reducers = combineReducers({
  meals: mealReducer,
});
const store = createStore(reducers);
function App() {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

export default App;
