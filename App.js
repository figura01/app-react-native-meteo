

import Home from './pages/Home/Home.jsx';
import Forecast from './pages/Forecast/Forecast.jsx';
import AlataRegular from './assets/fonts/Alata-Regular.ttf';
import { useFonts } from 'expo-font';
import { Container } from './components/Container/Container.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: 'transparent',
  }
}

export default function App() {
  const [isFontsLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });
  
  return (
    <NavigationContainer theme={navTheme}>
     
      {isFontsLoaded ? (
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: "fade"
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator> 
      ) : null}
        
    </NavigationContainer>
  );
}