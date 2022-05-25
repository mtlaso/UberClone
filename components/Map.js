import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useRef, useEffect } from 'react'

import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

import { GOOGLE_MAPS_APIKEY } from "@env"

import { useSelector } from 'react-redux'

import tw from 'tailwind-react-native-classnames'

import { selectOrigin, selectDestination } from '../slices/navSlice'


const Map = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)

    const mapRef = useRef(null)

    useEffect(() => {
        if (!origin || !destination) return

        // Zoom and fit to the markers
        mapRef.current.fitToSuppliedMarkers(["originMarker", "destinationMarker"], {
            animated: true, edgePadding: {bottom: 50, right: 50, top: 200, left: 50}
        })
    }, [origin, destination])

    return (
        <>
            <MapView
                ref={mapRef}
                mapType="mutedStandard"
                style={tw`flex-1`}
                initialRegion={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}>

                {origin && destination &&
                    <MapViewDirections
                        origin={{ latitude: origin.location.lat, longitude: origin.location.lng }}
                        destination={{ latitude: destination.location.lat, longitude: destination.location.lng }}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor="black"
                    />
                }

                {origin && destination &&
                    <Marker
                        identifier="destinationMarker"
                        coordinate={{
                            latitude: destination.location.lat,
                            longitude: destination.location.lng
                        }}
                        title="Your location"
                        description={destination.description}
                    />
                }

                <Marker
                    identifier="originMarker"
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title="Your location"
                    description={origin.description}
                />
            </MapView>
        </>
    )
}

export default Map

const styles = StyleSheet.create({})
