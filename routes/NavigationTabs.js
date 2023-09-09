import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Hero from '../screens/Hero';
import DetailHero from '../screens/DetailHero';
import BottomNavigation from '../components/BottomNavigation'
import Surah from '../screens/Surah';
import DetailSurah from '../screens/DetailSurah';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />} >
      <Tab.Screen name="Beranda" component={Home} options={{
        tabBarLabel: 'Beranda',
      }}/>
      <Tab.Screen name="Pahlawan" component={Hero} options={{
        tabBarLabel: 'Pahlawan',
      }}/>
      <Tab.Screen name="Surah" component={Surah} options={{
        tabBarLabel: 'Surah',
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
        <Stack.Screen name="DetailSurah" component={DetailSurah} options={{
          title: 'Rincian Surah'
        }} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{

            headerShown : false
        }} />
      </Stack.Navigator>
  );
}

export default Router;
