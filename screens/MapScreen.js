import React from 'react'
import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from 'react-native'

import tw from 'tailwind-react-native-classnames'

import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

import { useNavigation } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'


const MapScreen = () => {
    const origin = useSelector(selectOrigin)
    const navigation = useNavigation();
    const stackNavigator = createNativeStackNavigator()

    return (
        origin === null ?
            <>
                {Alert.alert("Please select your origin",
                    "To get a ride, you first need to select your origin.",
                    [{
                        text: "Go Back",
                        onPress: () => { navigation.navigate("HomeScreen") }
                    }])}
            </>
            :
            <SafeAreaView style={{backgroundColor: "white"}}>
                <View style={styles.mapStyle}>
                    <Map />
                </View>

                <View style={styles.navigateCardStyle}>
                    <stackNavigator.Navigator>
                        <stackNavigator.Screen
                            name="NavigateCard"
                            component={NavigateCard}
                            options={{
                                headerShown: false
                            }}
                        />

                        <stackNavigator.Screen
                            name="RideOptionsCard"
                            component={RideOptionsCard}
                            options={{
                                headerShown: false
                            }}
                        />
                    </stackNavigator.Navigator>
                </View>
            </SafeAreaView>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    mapStyle: {
        height: "45%",
        backgroundColor: "white"
    },
    navigateCardStyle: {
        height: "55%",
        backgroundColor: "white"
    }
})