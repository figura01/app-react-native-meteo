import { View, Image, TouchableOpacity  } from 'react-native';
import { s } from './MeteoBasic.style.js';
import { Txt } from '../Txt/Txt.jsx';
import { Clock } from '../Clock/Clock.jsx';

export function MeteoBasic({ onPress, temperature, city, interpretation }) {
    return (
        <>
            <View style={s.clock}>
                <Clock />
            </View>

            <Txt style={s.city}>{city}</Txt>

            <Txt style={s.weather_label}>{interpretation.label}</Txt>

            <View style={s.temperature_box}>
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Txt style={s.temperature}>{temperature}°</Txt>
                </TouchableOpacity>
                <Image style={s.image} source={interpretation.image}/>
            </View>
        </>
    );
};