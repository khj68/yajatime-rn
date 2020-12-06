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

import { 
  DefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

DefaultTheme.colors.background = '#ffffff';

const JoinStack = createStackNavigator();

function IndexScreen(): React.ReactElement {
  return(
    <>
      <View style={styles.topContainer}>
        <Image
          style={{height: 50, width: 50}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
        />
        <Text>심심할 때 뭐해?</Text>
        <Text>야자타임</Text>
      </View>
      <View style={styles.midContainer}>
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
          <TouchableOpacity style={styles.btnSignIn}>
            <Text style={styles.btnText}>로그인</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.btnSignUp}>
          <Text>아이디/비밀번호 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSignUp}>
          <Text>회원가입</Text>
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
    <JoinStack.Navigator >
      <JoinStack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }}/>
      <JoinStack.Screen name="School" component={SchoolScreen} />
      <JoinStack.Screen name="Term" component={TermScreen} />
      <JoinStack.Screen name="Detail" component={DetailScreen} />
      <JoinStack.Screen name="Complete" component={CompleteScreen} />
    </JoinStack.Navigator>
  );
}

const styles = StyleSheet.create({
  topContainer:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  midContainer:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  bottomContainer:{
    flex: 5,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'grey',
  },
  textInput: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderRadius: 20,
    marginTop: 6,
    backgroundColor: '#e9e9e9',
  },
  btnSignIn: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderRadius: 20,
    marginTop: 4,
    backgroundColor: '#00287e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSignUp: {
    height: 10,
    width: 300,
    borderColor: 'black',
    borderRadius: 20,
    marginTop: 20,
    // backgroundColor: '#00287e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
  },
  background: {
    backgroundColor: '#ffffff',
  }
});

export default JoinScreen;
