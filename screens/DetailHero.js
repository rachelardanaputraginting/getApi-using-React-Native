import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailHero = ({route}) => {

const {name, birth_year, death_year, description, ascension_year} = route.params

  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default DetailHero

const styles = StyleSheet.create({})