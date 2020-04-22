import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens//FiltersScreen';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const SideDrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeBackgroundColor: 'yellow',

          itemStyle: {
            borderTopRightRadius: 100,
          },
          labelStyle: {
            color: 'grey',
            fontSize: 16,
          },
        }}
        drawerStyle={{
          height: 250,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
          padding: 25,
        }}>
        <Drawer.Screen
          name="MEALS"
          component={BottomNavigation}
          options={{
            drawerIcon: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  color="black"
                  title="FAVOURITE"
                  iconName="filter"
                  iconSize="30"
                />
              </HeaderButtons>
            ),
          }}
        />
        <Drawer.Screen
          name="filter"
          component={FiltersScreen}
          options={{
            drawerIcon: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  color="black"
                  title="FAVOURITE"
                  iconName="filter"
                  iconSize="30"
                />
              </HeaderButtons>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: 'black',
        inactiveBackgroundColor: 'rgba(0,0,0,0.3)',
        activeTintColor: 'white',
        inactiveTintColor: 'white',

        style: {
          flex: 0.1,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          padding: 10,
        },
        tabStyle: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingTop: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={MealsNavigator}
        options={{
          tabBarIcon: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                color="white"
                title="FAVOURITE"
                iconName="utensils"
                iconSize="30"
              />
            </HeaderButtons>
          ),
          title: '',
        }}
      />

      <Tab.Screen
        name="favourites Screen"
        component={FavouritesScreen}
        options={{
          tabBarIcon: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                color="white"
                title="FAVOURITE"
                iconName="star"
                iconSize="30"
              />
            </HeaderButtons>
          ),
          title: '',
        }}
      />
    </Tab.Navigator>
  );
};

function MealsNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={CategoriesScreen}
        options={({route}) => ({
          headerTitleAlign: 'center',

          // headerLeft: () => (
          //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
          //     <Item
          //       iconName="grip-vertical"
          //       iconSize="30"
          //       color="black"
          //       onPress={() => props.navigation.toggleDrawer()}
          //     />
          //   </HeaderButtons>
          // ),
        })}
      />
      <Stack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
        options={({route}) => ({
          title: route.params.name,

          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="MealDetailsScreen"
        component={MealDetailsScreen}
        options={({route}) => ({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                iconName={route.params.isFav ? 'star' : 'star-of-life'}
                title="FAVOURITE"
                color="white"
                iconSize="25"
                onPress={route.params.toggle}
              />
            </HeaderButtons>
          ),
          title: route.params.title,
          headerStyle: {
            backgroundColor: route.params.color,
          },
          headerTitleAlign: 'center',

          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
}

export default SideDrawerNavigation;
{
  /* <Tab.Navigator>
<Tab.Screen name="Home" component={CategoryMealsScreen} />
<Tab.Screen name="favouritesScreen" component={FavouritesScreen} />
</Tab.Navigator> */
}
