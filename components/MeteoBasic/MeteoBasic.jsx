import { View, Image } from 'react-native';
import { s } from './MeteoBasic.style.js';
import { Txt } from '../Txt/Txt.jsx';

export function MeteoBasic({}) {
    return (
        <>
            <View style={s.clock}>
                <Txt>Clock</Txt>
            </View>

            <Txt style={s.city}>City</Txt>

            <Txt style={s.weather_label}>Label</Txt>

            <View style={s.temperature_box}>
                <Txt style={s.temperature}>3°</Txt>
                <Image style={s.image} />
            </View>
        </>
    );
};