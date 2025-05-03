
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './pages/Home/Home.jsx';

import { s } from './App.style.js';
import { ImageBackground } from 'react-native';
import backgroundImg from './assets/background.png';

import AlataRegular from './assets/fonts/Alata-Regular.ttf';
import { useFonts } from 'expo-font';

export default function App() {
  const [isFontsLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  
  return (
    <ImageBackground source={backgroundImg} style={s.image_background} imageStyle={s.img} resizeMode="cover">
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontsLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}