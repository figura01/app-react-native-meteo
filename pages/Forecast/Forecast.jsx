import { TouchableOpacity, View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./Forecast.style.js";
import { Container } from "../../components/Container/Container.jsx";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem.jsx";
import { getWeatherInterpretation } from "../../services/meteo-service.js";
import { dateToDDMM, DAYS } from "../../services/date-service.js";

export default function Forecast() {
    const { params } = useRoute();
    const nav = useNavigation();
    console.log('PARAMS : ', params)

    const backButton = (
        <TouchableOpacity
            style={s.back_button}
            onPress={() => nav.goBack()}
        > 
            <Txt> {"<"} </Txt>
        </TouchableOpacity>
    )

    const header = (
        <View style={s.header}>
            {backButton}
            <View style={s.header_texts}>
                <Txt>{params.city}</Txt>
                <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
            </View>
        </View>
    )

    const forecastList = (
        <View style={s.forecastList}>
            {params?.time.map((time, index) => {
                const code = params.weathercode[index];
                console.log("code : ", code)
                const image = getWeatherInterpretation(code)?.image;
                const date = new Date(time);
                const day = DAYS[new Date(time).getDay()];
                const temperature = params.temperature_2m_max[index];
                
                return (
                    <ForecastListItem 
                        date={dateToDDMM(date)} 
                        day={day} 
                        image={image} 
                        key={time}
                        temperature={temperature.toFixed(0)}
                    />
                )
            })}
        </View>
    )

    return (
        <>
            <Container>
                {header}
                {forecastList}
            </Container>
        </>
    );
}