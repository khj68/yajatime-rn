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
  Image,
  TextInput,
  TouchableOpacity,
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

const JoinStack = createStackNavigator();

function IndexScreen(): React.ReactElement {
  return(
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
        />
      </View>
      <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder='아이디'
            paddingLeft={15}
          />

          <TextInput
            style={styles.textInput} 
            placeholder='비밀번호'
            secureTextEntry={true}
            paddingLeft={15}

          />
      </View>
      <View style={styles.container}>
          <TouchableOpacity>
            <Text>hi</Text>
          </TouchableOpacity>
      </View>
    </>
  );
}

function SchoolScreen(): React.ReactElement {
  return(
    <Text>School Screen</Text>
  );
}

function TermScreen(): React.ReactElement {
  return(
    <Text>Term Screen</Text>
  );
}

function DetailScreen(): React.ReactElement {
  return(
    <Text>Detail Screen</Text>
  );
}

function CompleteScreen(): React.ReactElement {
  return(
    <Text>Complete Screen</Text>
  );
}

function JoinScreen(): React.ReactElement {
  return (
    <JoinStack.Navigator>
      <JoinStack.Screen name="Index" component={IndexScreen} />
      <JoinStack.Screen name="School" component={SchoolScreen} />
      <JoinStack.Screen name="Term" component={TermScreen} />
      <JoinStack.Screen name="Detail" component={DetailScreen} />
      <JoinStack.Screen name="Complete" component={CompleteScreen} />
    </JoinStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 4,
    backgroundColor: '#e9e9e9',
  }
});

export default JoinScreen;
