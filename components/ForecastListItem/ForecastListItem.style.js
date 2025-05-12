import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
    },
    image: {
        width: 50,
        height: 50,
    },
    day: {
        fontSize: 20,
    },
    date: {
        fontSize: 20,
    },
    forcastList: {
        marginTop: 50,
    },
    temperature: {
        width: 60,
        textAlign: "right",
    }
})

export { s };