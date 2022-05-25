import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const RideOptionsCard = () => {
    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <View>
                <TouchableOpacity>
                    <Icon name="arrowleft" color="white" type="antdesign" 
                    style={tw`bg-black rounded-full w-10 p-2`}/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
