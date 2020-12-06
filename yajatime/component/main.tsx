import React, {
  useEffect,
} from 'react';
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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

function MainScreen(): React.ReactElement {
  useEffect(() => {
    console.log('[LOG]: Main Screen Start!');
  }, []);
  
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Switch" component={SwitchScreen} />
        <MainStack.Screen name="Join" component={JoinScreen} />
        <MainStack.Screen name="Main" component={MainScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default MainScreen;
