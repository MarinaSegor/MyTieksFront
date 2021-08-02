import React, { useEffect, useState } from 'react';
import {LogBox} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './components/OnboardingScreen';
import LoginContainer from './components/LoginContainer'
import AsyncStorage from '@react-native-async-storage/async-storage';"@react-native-async-storage/async-storage";

LogBox.ignoreLogs(['Remote debugger']);


const Stack = createStackNavigator();

function App() {

  // fonction permettant une seule vision du Onboard à la premiere connexion et plus par la suite
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value === null){
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }else {
        setIsFirstLaunch(false);
      }
    })
  }, [])

  if( isFirstLaunch === null){
    return null;
  }else if ( isFirstLaunch === true ){
    return (
      <NavigationContainer>
      <Stack.Navigator
      headerShown= "false">
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="Login" component={LoginContainer}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  } else {
    return <LoginContainer/>;
  }
}

export default App;