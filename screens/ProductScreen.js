import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function ProductScreen(props) {
    const item = props.route.params
    const navigation = useNavigation()
    const [size, setSize] = useState('small')

    return (
        <View className="flex-1 bg-orange-100">
            <StatusBar style='light' />
            {/* top background image */}
            <Image source={require('../assets/images/background2.jpg')} 
                className="w-full absolute -top-5 opacity-95"
                style={{ height: 170, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
            />

            <SafeAreaView>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeftCircleIcon size="50" color="white" />
                </TouchableOpacity>
                {/* logo image */}
                <View className="flex-row justify-center mt-4">
                    <Image 
                        source={require('../assets/images/kitchenlogo.jpg')}
                        className="w-20 h-20"
                    />
                </View>

                <View className="px-4 mt-4 border-b-2 border-gray-200">
                    <View className="flex-row justify-between items-center">
                        <Text className="text-2xl font-semibold">{item.name}</Text>
                        <Image source={item.image} className="w-40 h-40 rounded-xl" />
                    </View>
                    

                    <Text className="mt-3 pb-4">{item.desc}</Text>
                </View>
                
                <View className="mx-4 space-y-2">
                    
                    <View className="flex-row justify-between pt-5">
                        <TouchableOpacity
                            onPress={() => setSize('small')}
                            style={{ backgroundColor: size == 'small' ? "#21180e" : "#fed7aa" }}
                            className="p-3 px-8 rounded-full"
                        >
                            <Text className={size == 'small' ? 'text-white' : 'text-black'}>Small</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSize('medium')}
                            style={{ backgroundColor: size == 'medium' ? "#21180e" : "#fed7aa" }}
                            className="p-3 px-8 rounded-full"
                        >
                            <Text className={size == 'medium' ? 'text-white' : 'text-black'}>Medium</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSize('large')}
                            style={{ backgroundColor: size == 'large' ? "#21180e" : "#fed7aa" }}
                            className="p-3 px-8 rounded-full"
                        >
                            <Text className={size == 'large' ? 'text-white' : 'text-black'}>Large</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="flex-row justify-between items-center">
                        <View className="flex-row mx-4 my-4 bg-orange-200 items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90">
                            <StarIcon size="15" color="orange" />
                            <Text className="text-lg font-semibold text-black">{item.stars}</Text>
                        </View>
                        <Text className="my-3 text-lg font-light">Size: 
                            {size === 'small' && (<Text className="font-normal">150kg</Text>)} {size === 'medium' && (<Text className="font-normal">220kg</Text>)} {size === 'large' && (<Text className="font-normal">270kg</Text>)}
                        </Text>
                    </View>
                </View>

                <View className="flex-row justify-between items-center px-4 pt-4 border-t-2 border-gray-200">
                    <Text className="text-3xl font-semibold px-4">{item.price}</Text>
                    
                    <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
                        <TouchableOpacity>
                            <MinusIcon size="20" strokeWidth={3} color="black" />
                        </TouchableOpacity>
                        <Text className="font-extrabold text-lg text-black">2</Text>
                        <TouchableOpacity>
                            <PlusIcon size="20" strokeWidth={3} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}