import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';
import { SignUp } from './src/screens/SignUp';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* {fontsLoaded ? <SignIn /> : <Loading />}
      {fontsLoaded ? <SignUp /> : <Loading />} */}
      {fontsLoaded ? <Routes /> : <Loading />}

    </NativeBaseProvider>
  );
}