import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, } from 'react-native-safe-area-context'
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon, ShoppingCartIcon, ShoppingBagIcon } from 'react-native-heroicons/outline'
import { StarIcon, HomeIcon, CreditCardIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'


export default function ProductScreen(props) {
    const item = props.route.params
    const navigation = useNavigation()
    const [size, setSize] = useState('small')

    return (
        <View className="flex-1 bg-orange-100">
            <StatusBar style='light' />
            {/* top background image */}
            <Image source={require('../assets/images/background1.jpg')} 
                className="w-full absolute -top-5 opacity-90"
                style={{ height: 170, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
            />

            <SafeAreaView>
                <TouchableOpacity className="ml-1 mt-2" onPress={() => navigation.goBack()}>
                    <ArrowLeftCircleIcon size="50" color="#21180e" />
                </TouchableOpacity>
                {/* logo image */}
                <View className="flex-row justify-center mt-4">
                    <Image 
                        source={require('../assets/images/kitchenlogo.jpg')}
                        className="w-20 h-20"
                    />
                </View>

                <View className="px-4 mt-6 border-b-2 border-gray-200">
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
                            {size === 'small' && (<Text className="font-normal">1.5ltr</Text>)} {size === 'medium' && (<Text className="font-normal">2l</Text>)} {size === 'large' && (<Text className="font-normal">2.5l</Text>)}
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

                <View className='flex-row justify-center mt-3'>
                    <TouchableOpacity className="mx-4 bg-[#21180e] p-1 py-5 rounded-t px-32 flex-row justify-center">
                        <Text className="text-white text-center">Add to Cart</Text>
                        <ShoppingCartIcon size="24" color="white" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mx-4 mt-1">
                    <TouchableOpacity className="ml-4 bg-orange-200 p-1 py-5 rounded-l px-8 flex-row justify-center items-center w-1/2 mr-1">
                        <Text className="text-black text-center text-xs mr-2">Continue shopping</Text>
                        <HomeIcon size="20" color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className="mr-4 bg-orange-200 p-1 py-5 rounded-r px-8 flex-row justify-center items-center w-1/2">
                        <Text className="text-black text-center text-xs mr-2">Proceed</Text>
                        <CreditCardIcon size="20" color="black" />
                    </TouchableOpacity>
                </View>
                {/*<View className="bg-orange-100 flex-row justify-between mx-4">
                    <TouchableOpacity onPress={() => navigation.goBack()} className="flex-row justify-center items-center w-1/2 border h-16">
                        <Text className="mr-2">Continue shopping</Text>
                        <HomeIcon size="24" color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row justify-center items-center w-1/2 border h-16">
                        <Text className="mr-2">Proceed</Text>
                        <ShoppingBagIcon size="24" color="black" />
                    </TouchableOpacity>
    </View>*/}
                
            </SafeAreaView>
        </View>
    )
}

