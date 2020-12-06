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

function IndexScreen() {
  return(
    <Text>Main Index Screen</Text>
  );
}

function MainScreen(): React.ReactElement {
  useEffect(() => {
    console.log('[LOG]: Main Screen Start!');
  }, []);
  
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Index" component={IndexScreen} />
    </MainStack.Navigator>
  );
};

const styles = StyleSheet.create({
  
});

export default MainScreen;
