import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"

import NavOptions from '../components/NavOptions'
import NavFavourites from '../components/NavFavourites';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env"

import { useDispatch } from "react-redux"
import { setOrigin, setDestination, setTravelTimeInformation } from '../slices/navSlice';



// rnfes (es7 react extention)
const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white-100 h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height: 100
                    }}
                    resizeMode="contain"
                    source={{
                        uri: "https://ycombinator.wpengine.com/wp-content/uploads/2017/07/uber-logo-300-2.png"
                    }} />

                <GooglePlacesAutocomplete
                    styles={{container: {flex:0, marginBottom: 5}, textInput: {fontSize: 18}}}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    placeholder='Where from?'
                    debounce={400}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))

                        dispatch(setTravelTimeInformation(null))
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                />
                <NavOptions />
                <NavFavourites style={"pt-4"}/>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: "blue",
    }
});
