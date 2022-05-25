import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'

import tw from 'tailwind-react-native-classnames';

import { Icon, Button } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: "0",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "1",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"
    }
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

    // const GoIcon = <Icon 
    // style={tw`p-2 bg-black rounded-full w-10 mt-4`}
    // name="arrowright" color="white" type="antdesign"/>;
    const GoIcon = <Icon
        name="arrowright" color="white" type="antdesign" />;

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    // disabled={!origin}
                    onPress={() =>
                            navigation.navigate(item.screen)
                    }
                    // p-2 pl-6 pb-8 pt-4 ml-2 bg-gray-200
                    style={styles.container}
                >
                    <View style={tw`${!origin && 'opacity-20'}`}>
                        <Image
                            style={{
                                width: 120, height: 120
                            }}
                            resizeMode="contain"
                            source={{
                                uri: item.image
                            }} />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Button
                            onPress={() =>
                                navigation.navigate(item.screen)}
                            icon={GoIcon}
                            buttonStyle={tw`bg-black rounded-full w-10 mt-4`} 
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e9e9e9",
        flex: 1,
        padding: 15,
        marginRight: 5,
        alignItems: "center"
    }
});

export default NavOptions;