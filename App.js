
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './pages/Home/Home.jsx';

import { s } from './App.style.js';
import { ImageBackground } from 'react-native';
import backgroundImg from './assets/background.png';
export default function App() {
  
  return (
    <ImageBackground source={backgroundImg} style={s.image_background} imageStyle={s.img} resizeMode="cover">
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}