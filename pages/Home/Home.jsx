import { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import { s } from './Home.style.js';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MeteoAPI } from '../../api/meteo.js';
import { MeteoBasic } from '../../components/MeteoBasic/MeteoBasic.jsx';
import { MeteoAdvance } from '../../components/MeteoAdvance/MeteoAdvance.jsx';
import { getWeatherInterpretation } from '../../services/meteo-service.js';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../components/Container/Container.jsx';
import { Searchbar } from '../../components/Searchbar/Searchbar.jsx';

function Home() {
    const nav = useNavigation()
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

    async function fetchCoordsByCity(city) {
        try {
            const coords = await MeteoAPI.fetchCoordsFromCity(city);
        setCoords(coords);
        } catch (e) {
            Alert.alert("Oups !", e);
        }
    }

    function goToForcastPage() {
        console.log("weather?.daily : ", weather?.daily);
        console.log("current city : ", city)
        nav.navigate("Forecast", { city, ...weather?.daily});
    }

    return currentWeather ? (
        <>
            <Container style={s.container}>
                <View style={s.meteo_basic}>
                    <MeteoBasic 
                        temperature={Math.round(currentWeather?.temperature)}
                        city={city}
                        interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
                        onPress={goToForcastPage}
                    />
                    
                </View>
                <View style={s.searchbar_container}>
                    <Searchbar onSubmit={fetchCoordsByCity} />
                </View>
                <View style={s.meteo_advance}>
                    <MeteoAdvance 
                        wind={currentWeather?.windspeed}
                        dusk={weather?.daily?.sunrise[0].split('T')[1]}
                        down={weather?.daily?.sunset[0].split('T')[1]}
                    />
                </View>
            </Container>
        </>
    ) : null;
}
export default Home;