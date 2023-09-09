import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Entypo } from '@expo/vector-icons';

const Surah = ({ navigation }) => {
    const apiUrl = "http://api.alquran.cloud/v1/quran/en.asad";
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                // Data yang diambil dari API sekarang tersedia di sini
                const surahs = response.data.data.surahs;
                setData(surahs);
            })
            .catch(error => {
                // Tangani kesalahan yang mungkin terjadi selama proses pengambilan data
                console.error("Axios error:", error);
            });
    }, []);

    return (
        <ScrollView className="my-1 pb-2">
            <SafeAreaView className="bg-slate-100 px-4">
                {data.map((surah, index) => (
                    <View key={index} className="bg-red-600 w-full p-3 rounded bg-white my-1  flex flex-row justify-between items-center overflow-y-scroll" >
                        <Text className="text-slate-700">{surah.number}</Text>
                        <Text className="text-slate-700 hover:text-sky-500">
                            {surah.name}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('DetailSurah', surah)}>
                            <Entypo name="chevron-small-right" size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                ))}
            </SafeAreaView>
        </ScrollView>
    );
}

export default Surah;

const styles = StyleSheet.create({});
