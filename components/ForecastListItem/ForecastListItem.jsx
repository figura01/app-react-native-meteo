import { View, Image } from "react-native";
import { s } from "./ForecastListItem.style.js";
import { Txt } from "../Txt/Txt.jsx";

export function ForecastListItem({ image, day, date, temperature, interpretation }) {
    console.log("-----> image in list: ", image)
    return (
        <View style={s.container}>
            <Image 
                style={s.image}
                source={image}
            />
            <Txt style={s.day}>{day}</Txt>
            <Txt style={s.date}>{date}</Txt>
            <Txt style={s.temperature}>{temperature}°</Txt>
        </View>
    )
}