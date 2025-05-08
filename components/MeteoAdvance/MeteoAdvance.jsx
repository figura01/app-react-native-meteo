import { View } from 'react-native';
import { Txt } from '../Txt/Txt.jsx';
import { s, StyledLabel, StyledValue, StyledContainer} from './MeteoAdvance.style.js';


export function MeteoAdvance({ dusk, down, wind}) {
    return (
      
        <View style={s.container}>
            <StyledContainer>
                <StyledValue>{dusk}</StyledValue>
                <StyledLabel>Aube</StyledLabel>
            </StyledContainer>
            <StyledContainer>
                <StyledValue>{down}</StyledValue>
                <StyledLabel>Crépuscule</StyledLabel>
            </StyledContainer>
            <StyledContainer>
                <StyledValue>{wind} km/h</StyledValue>
                <StyledLabel>Vent</StyledLabel>
            </StyledContainer>
        </View>
     
    )
};
