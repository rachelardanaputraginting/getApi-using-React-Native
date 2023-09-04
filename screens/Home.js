import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Entypo } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    const apiUrl = "https://indonesia-public-static-api.vercel.app/api/heroes";
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                // Data yang diambil dari API sekarang tersedia di sini
                setData(response.data);
            })
            .catch(error => {
                // Tangani kesalahan yang mungkin terjadi selama proses pengambilan data
                console.error("Axios error:", error);
            });
    }, [])

    return (
        <ScrollView className="my-1 mb-2">
            <SafeAreaView className="bg-slate-100 px-4">
                {data.map((item, index) => (
                    <View key={index} className="bg-red-600 w-full p-3 rounded bg-white mt-2  flex flex-row justify-between items-center overflow-y-scroll" >
                        <Text className="text-slate-700">{index + 1}</Text>
                        <Text className="text-slate-700 hover:text-sky-500">
                            {item.name}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('DetailHero', item)}>
                            <Entypo name="chevron-small-right" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                )
                )}
            </SafeAreaView>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})