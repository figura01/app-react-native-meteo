
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './pages/Home/Home.jsx';
import { s } from './App.style.js'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}