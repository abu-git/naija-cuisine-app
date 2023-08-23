import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function CategoriesCard({ item }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductScreen', {...item})} className="w-52 border-2 rounded-lg flex-row bg-[#fed7aa] mx-3">
            <Image source={item.image} className="w-24 h-24 rounded-l-lg" />
            <View className="space-y-2 justify-center px-1">
                <Text className="text-sm font-semibold">{item.name}</Text>
                <View className="rounded-2xl border p-1 w-12 flex-row bg-orange-100">
                    <StarIcon size="15" color="orange" />
                    <Text>{item.stars}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}