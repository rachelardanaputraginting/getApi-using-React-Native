import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Router from './routes/NavigationTabs'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  
  return (
    <NavigationContainer>
    <Router />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})