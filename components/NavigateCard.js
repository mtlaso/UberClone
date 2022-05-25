import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'

import tw from 'tailwind-react-native-classnames'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"

import { useDispatch } from "react-redux"
import { setDestination } from '../slices/navSlice'

import NavFavourites from './NavFavourites'

import { Icon } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center pt-5 pb-5 text-xl`}>Good morning, Danny</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where to go?'
                        styles={styles}
                        enablePoweredByContainer={false}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        placeholder='Where to go?'
                        debounce={400}
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))
                        }}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                    />
                </View>
                <NavFavourites style={"pl-5 pt-3"}/>
            </View>

            <View style={tw`flex-row bg-white justify-evenly py-3 mt-auto bg-gray-100`}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("RideOptionsCard")}
                    style={tw`flex-row justify-evenly bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name="directions-car" type="MaterialIcons" color="white" size={16} />
                    <Text style={tw`text-white text-center`}>Ride</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex-row justify-evenly bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name="fastfood" type="MaterialIcons" color="white" size={16} />
                    <Text style={tw`text-white text-center`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "white",
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})
