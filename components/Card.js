import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
    <View className="flex">
      <Text className="border-b border-slate-500 p-3">{children}</Text>
    </View>
  )
}

export default Card
