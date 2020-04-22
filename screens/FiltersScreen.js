import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {TouchableOpacity, Switch} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/actions';
const FilterScreens = props => {
  const [isGlutenFree, setIseGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVeganFree, setIsVeganFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVeganFree,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  };
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity>
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              iconName="grip-vertical"
              iconSize="30"
              color="black"
              onPress={() => props.navigation.toggleDrawer()}
            />
          </HeaderButtons>
        </TouchableOpacity>
        <TouchableOpacity>
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              iconName="save"
              iconSize="30"
              color="black"
              onPress={saveFilters}
            />
          </HeaderButtons>
        </TouchableOpacity>
      </View>
      <View>
        <FilterScreenComponent
          title="Gluten"
          value={isGlutenFree}
          onValueChange={value => setIseGlutenFree(value)}
        />
        <FilterScreenComponent
          title="Lactose-free"
          value={isLactoseFree}
          onValueChange={value => setIsLactoseFree(value)}
        />
        <FilterScreenComponent
          title="Vegan-free"
          value={isVeganFree}
          onValueChange={value => setIsVeganFree(value)}
        />
        <FilterScreenComponent
          title="Vegetarian-free"
          value={isVegetarian}
          onValueChange={value => setIsVegetarian(value)}
        />
      </View>
    </View>
  );
};

const FilterScreenComponent = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title} </Text>
      <Switch
        trackColor={{true: 'black'}}
        thumbColor={'grey'}
        value={props.value}
        onValueChange={props.onValueChange}
      />
    </View>
  );
};
export default FilterScreens;

const styles = StyleSheet.create({
  header: {
    padding: 5,
    width: '100%',
    height: '8%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  screen: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  text: {
    fontSize: 22,
  },
});
