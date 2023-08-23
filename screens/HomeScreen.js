import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'


import { categories, foods } from '../constants'
import FoodCard from '../components/FoodCard'
import CategoriesCard from '../components/CategoriesCard'
import Carousel from 'react-native-snap-carousel'

export default function HomeScreen() {
    const [activeCategory, setActiveCategory] = useState(1)

    return (
        <View className="flex-1 relative bg-orange-100">
            <StatusBar style='light' />
            {/* top background image */}
            <Image source={require('../assets/images/background1.jpg')} 
                className="w-full absolute -top-5 opacity-95"
                style={{ height: 200, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
            />
            <SafeAreaView>
                {/* logo image */}
                <View className="flex-row justify-center mt-5">
                    <Image 
                        source={require('../assets/images/kitchenlogo.jpg')}
                        className="w-24 h-24"
                    />
                </View>

                {/* categories */}
                <View className="mt-14">
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            let isActive = item.id == activeCategory
                            let activeTestClass = isActive ? "text-white" : "text-black"
                            return(
                                <TouchableOpacity
                                    onPress={() => setActiveCategory(item.id)}
                                    style={{ backgroundColor: isActive ? "#21180e" : "#fed7aa"}}
                                    className="p-4 px-5 border-2 rounded-full mr-2 shadow-md"
                                >
                                    <Text className={"font-semibold " + activeTestClass}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                {/* categories cards */}
                <View className="mt-4">
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={foods}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => {
                            return(
                                <CategoriesCard item={item} />
                            )
                        }}
                    />
                </View>
                
                <Text className="mx-4 font-extrabold text-2xl mt-6">Hot picks.</Text>
                {/* food cards */}
                <View className="mt-1 py-2">
                    <Carousel
                        containerCustomStyle={{ overflow: "visible" }}
                        data={foods}
                        loop={true}
                        renderItem={({item}) => <FoodCard item={item} />}
                        firstItem={1}
                        inactiveSlideOpacity={0.75}
                        inactiveSlideScale={0.77}
                        sliderWidth={400}
                        itemWidth={260}
                        slideStyle={{ display: "flex", alignItems: "center"}}
                    />
                </View>
            </SafeAreaView>
            
        </View>
    )
}