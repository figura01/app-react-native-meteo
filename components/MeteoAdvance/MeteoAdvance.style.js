import { StyleSheet, View } from "react-native";
import { Txt } from "../Txt/Txt";

const s = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: '#0000005c',
    },
});

export function StyledLabel({ children }) {
    return <Txt style={{fontSize: 15}}>{children}</Txt>
}

export function StyledValue({ children }) {
    return <Txt style={{fontSize: 20}}>{children}</Txt>
}

export function StyledContainer({ children }) {
    return <View style={{ alignItems: 'center'}}>{children}</View>
}

export { s }