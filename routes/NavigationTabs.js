import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Hero from '../screens/Hero';
import DetailHero from '../screens/DetailHero';
import BottomNavigation from '../components/BottomNavigation'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />} >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Beranda',
      }}/>
      <Tab.Screen name="Pahlawan" component={Hero} options={{
        tabBarLabel: 'Pahlawan',
      }}/>
    </Tab.Navigator>
  );
}

const Router = () =>  {
  return (
      <Stack.Navigator initialRouteName='MyTabs'>
        <Stack.Screen name="DetailHero" component={DetailHero} options={{
          title: 'Rincian Pahlawan'
        }} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{

            headerShown : false
        }} />
      </Stack.Navigator>
  );
}

export default Router;
