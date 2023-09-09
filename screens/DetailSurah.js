import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DetailSurah = ({route}) => {

const {number, name, englishName, englishNameTranslation, revelationType, ayahs} = route.params

  return (
    <SafeAreaView className="bg-slate-100 flex-1">

    <View className="bg-white m-3 rounded">
      <View className="border-b bg-white shadow mt-4 p-4 rounded">
        <Text className="font-bold text-[15px] text-slate-700">{name}</Text>
      </View>
      <View className="flex flex-column justify-between p-5 ">
        <Text className="text-slate-700">English Name : {englishName}</Text>
        <Text className="text-slate-700">English Name Translation : {englishNameTranslation}</Text>
      <Text className="text-slate-700">Relevation Type : {revelationType}</Text>
      </View> 
      <View>
        <Text className="text-slate-600 p-5 text-justify">{ayahs.map((item, index) => (
          <Text>
            {item.text}
          </Text>
        ))}</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default DetailSurah

const styles = StyleSheet.create({})