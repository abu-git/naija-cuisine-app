import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon, PlusIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function FoodCard({ item }) {
    const navigation = useNavigation()
    return (
        <View className="bg-[#21180e] h-[300] w-[250] rounded-3xl overflow-hidden">
            <View className="flex-row justify-center mt-5">
                <Image source={item.image} className="w-28 h-28 rounded-md" />
            </View>

            <View className="px-5 mt-5 space-y-2">
                <Text className="text-white text-2xl font-semibold">{item.name}</Text>

                <View style={{ backgroundColor: 'rgba(255,255,255,0.2)'}} className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16">
                    <StarIcon size="15" color="white" />
                    <Text className="text-base font-semibold text-white">{item.stars}</Text>
                </View>
            </View>

            <View className="flex-row justify-between items-center px-5 mt-2">
                <Text className="text-white font-bold text-lg">{item.price}</Text>

                <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', {...item})} className="p-4 bg-white rounded-full">
                    <PlusIcon size="25" strokeWidth={3} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}