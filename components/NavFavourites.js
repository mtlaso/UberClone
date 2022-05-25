import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'

import { Icon, Button } from "react-native-elements"

import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id: "0",
        icon: "home",
        location: "Home",
        destination: "6711 rue de pertuis"
    },
    {
        id: "1",
        icon: "briefcase",
        location: "Work",
        destination: "756 boulevard masson"
    }
]

const NavFavourites = (props) => {
    const elIcon = (icon) => <Icon
        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
        name={icon}
        type="ionicon"
        color="white"
        size={10}
    />
    return (
        <FlatList
            ItemSeparatorComponent={() => (
                <View style={tw`bg-gray-200`}/>
            )}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item: { location, destination, icon } }) => (
                <TouchableOpacity style={[tw`flex-row items-start ${props.style}`]}>
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={10}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-500`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites

const styles = StyleSheet.create({})
