import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { 
  DefaultTheme,
  NavigationContainer 
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import SwitchScreen from './component/switch';
import JoinScreen from './component/join/join';
import MainScreen from './component/main';

DefaultTheme.colors.background = '#ffffff';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Switch" component={SwitchScreen} />
        <Stack.Screen name="Join" component={JoinScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
