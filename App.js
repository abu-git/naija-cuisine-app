import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


//import Routing modules
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import HomeScreen component
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

//initiate Routing Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="ProductScreen" options={{headerShown: false}} component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
     
    </>
  );
}

