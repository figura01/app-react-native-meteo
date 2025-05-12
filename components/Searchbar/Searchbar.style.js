import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    input: {  
        backgroundColor: "white",
        borderRadius: 20,
        paddingLeft: 20,
        height: 40,
        fontFamily: "Alata-Regular",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export { s };