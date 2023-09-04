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

                // Lakukan apa pun yang perlu Anda lakukan dengan data tersebut
            })
            .catch(error => {
                // Tangani kesalahan yang mungkin terjadi selama proses pengambilan data
                console.error("Axios error:", error);
            });
    }, [])

    return (
        <SafeAreaView className="bg-slate-100 px-4">
            <View className="w-full p-3 py-5 rounded my-8 mb-24 bg-white mb-4 shadow">
                <Text className="px-2 text-center font-semibold text-[20px] text-slate-700">Daftar Pahlawan Indonesia</Text>
            </View>
            <ScrollView className="mb-32">
                {data.map((item, index) => (
                    <View key={index} className="bg-red-600 w-full p-3 rounded bg-white mt-1  flex flex-row justify-between items-center overflow-y-scroll" >
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})