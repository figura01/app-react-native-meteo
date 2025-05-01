import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { s } from './Home.style.js';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MeteoAPI } from '../../api/meteo.js';

function Home() {
    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();

    useEffect(() => {
        getUserCoords();
    }, []);

    useEffect(() => {
        if(coords) {
            fetchWeather(coords);
        }
    }, [coords])

    async function getUserCoords() {
        let { status } = await requestForegroundPermissionsAsync();
        if (status === 'granted') {

            const location = await getCurrentPositionAsync({});
            setCoords({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
            setCoords({lat: "48.85", lng: "2.35"});
            return;
        } else {
            setCoords({lat: "48.85", lng: "2.35"});
        }
    }

    async function fetchWeather(coordinates) {
        const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
    
        if (weatherResponse) {
            setWeather(weatherResponse);
        }
    }
    console.log("weather value: ", weather);

    return (
        <>

            <View style={s.meteo_basic}>
                <Text style={s.meteo_basic.txt}>Meteo Basic</Text>
            </View>
            <View style={s.searchbar_container}>
                <Text>Searchbar</Text>
            </View>
            <View style={s.meteo_advance}>
                <Text>Meteo Advance</Text>
            </View>
        </>
    );
}
export default Home;