import { ImageBackground } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { s } from './Container.style.js';
import backgroundImg from '../../assets/background.png';

export function Container({ children }) {
    return (
        <ImageBackground source={backgroundImg} style={s.image_background} imageStyle={s.img} resizeMode="cover">
            <SafeAreaProvider>
                <SafeAreaView style={s.container}>
                    {children}
                </SafeAreaView>
            </SafeAreaProvider>
        </ImageBackground>
    );
}