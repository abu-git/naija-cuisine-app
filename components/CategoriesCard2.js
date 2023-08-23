import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function CategoriesCard2({item}) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('ProductScreen', {...item})} className="w-36 rounded-lg bg-[#fed7aa] mx-3 overflow-hidden">
            <Image source={item.image} className="w-36 h-36 rounded-l-lg shadow-lg opacity-90" />
            <View className="space-y-2 justify-center px-1 -mt-20">
                <View style={{ backgroundColor: 'rgba(255,255,255,0.4)'}} className="flex-row justify-center items-center p-1 mx-3 rounded-full">
                    <Text className="text-sm font-semibold text-white py-1">{item.name}</Text>
                </View>
                
                <View className="rounded-2xl border p-1 w-12 mb-1 flex-row bg-orange-100">
                    <StarIcon size="15" color="orange" />
                    <Text>{item.stars}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}