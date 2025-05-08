import { View, Image } from 'react-native';
import { s } from './MeteoBasic.style.js';
import { Txt } from '../Txt/Txt.jsx';
import { Clock } from '../Clock/Clock.jsx';

export function MeteoBasic({ temperature, city, interpretation }) {
    return (
        <>
            <View style={s.clock}>
                <Clock />
            </View>

            <Txt style={s.city}>{city}</Txt>

            <Txt style={s.weather_label}>{interpretation.label}</Txt>

            <View style={s.temperature_box}>
                <Txt style={s.temperature}>{temperature}°</Txt>
                <Image style={s.image} source={interpretation.image}/>
            </View>
        </>
    );
};