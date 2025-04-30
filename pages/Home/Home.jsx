import { View, Text } from 'react-native';
import { s } from './Home.style.js';

function Home() {
  return (
    <>

        <View style={s.meteo_basic}>
            <Text style={s.meteo_basic.txt}>Meteo Basic</Text>
        </View>
        <View style={s.searchbar_container}>
            <Text>Searchbar</Text>
        </View>
        <View style={s.meteo_advance}>
            <Text>Meteo Advance</Text>
        </View>
    </>
  );
}
export default Home;