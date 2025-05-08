import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { s } from './Home.style.js';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MeteoAPI } from '../../api/meteo.js';
import { Txt } from '../../components/Txt/Txt.jsx';
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic.jsx';
import { MeteoAdvance } from '../../components/MeteoAdvance/MeteoAdvance.jsx';
import { getWeatherInterpretation } from '../../services/meteo-service.js';

function Home() {
    const [coords, setCoords] = useState();
    const [weather, setWeather] = useState();
    const [city, setCity] = useState();
    const currentWeather = weather?.current_weather;

    useEffect(() => {
        getUserCoords();
    }, []);

    useEffect(() => {
        if(coords) {
            fetchWeather(coords);
            fetchCity(coords);
        }
    }, [coords]);

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

    async function fetchCity(coordinates) {
        let cityResponse = await MeteoAPI.fetchCityFromCoords(
          coordinates
        );
        if(cityResponse) {
            setCity(cityResponse);
        }
    }

    return currentWeather ? (
        <>

            <View style={s.meteo_basic}>
                <MeteoBasic 
                    temperature={Math.round(currentWeather?.temperature)}
                    city={city}
                    interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
                />
                
            </View>
            <View style={s.searchbar_container}>
                <Text>Searchbar</Text>
            </View>
            <View style={s.meteo_advance}>
                <MeteoAdvance 
                    wind={currentWeather?.windspeed}
                    dusk={weather?.daily?.sunrise[0].split('T')[1]}
                    down={weather?.daily?.sunset[0].split('T')[1]}
                />
            </View>
        </>
    ) : null;
}
export default Home;