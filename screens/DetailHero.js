import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailHero = ({route}) => {

const {name, birth_year, death_year, description, ascension_year} = route.params

  return (
    <SafeAreaView className="bg-slate-100 flex-1">

    <View className="bg-white m-3 rounded">
      <View className="border-b bg-white shadow mt-4 p-4 rounded">
        <Text className="font-bold text-[15px] text-slate-700">{name}</Text>
      </View>
      <View className="flex flex-column justify-between p-5 ">
        <Text className="text-slate-700">Lahir : {birth_year}</Text>
        <Text className="text-slate-700">Wafat : {death_year}</Text>
      <Text className="text-slate-700">Tahun Kenaikan : {ascension_year}</Text>
      </View> 
      <View>
        <Text className="text-slate-600 p-5 text-justify">{description}</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default DetailHero

const styles = StyleSheet.create({})