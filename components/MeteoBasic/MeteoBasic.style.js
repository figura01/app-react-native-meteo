import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    clock: {
       alignItems: 'flex-end', 
    },
    temperature_box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
   
    },
    temperature: {
        fontSize: 150,
    },
    weather_label: {
        alignSelf:"flex-end",
        transform: [{ rotate: '-90deg' }],
        fontSize:20,
    },
    city: {},
    image: {
        width: 90,
        height: 90,
        //backgroundColor: 'white',
    },
});

export { s };