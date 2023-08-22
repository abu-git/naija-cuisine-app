import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ProductScreen(props) {
    const item = props.route.params
    return (
        <View className="flex-1 bg-orange-100">
            <StatusBar style='light' />
            {/* top background image */}
            <Image source={require('../assets/images/background2.jpg')} 
                className="w-full absolute -top-5 opacity-95"
                style={{ height: 170, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
            />

            <SafeAreaView>
                {/* logo image */}
                <View className="flex-row justify-center mt-5">
                    <Image 
                        source={require('../assets/images/kitchenlogo.jpg')}
                        className="w-20 h-20"
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}