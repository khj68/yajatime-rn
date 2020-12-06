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
  Button,
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
import Icon from 'react-native-vector-icons/AntDesign';

import SchoolScreen from './school';
import TermScreen from './term';
import DetailScreen from './detail';

DefaultTheme.colors.background = '#ffffff';

const JoinStack = createStackNavigator();
const SignStack = createStackNavigator();

function IndexScreen(props: any): React.ReactElement {
  return(
    <>
      <View style={styles.topContainer}>
        <Image
          style={styles.titleImg}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
          }}
        />
        <Text style={styles.title}>심심할 때 뭐해?</Text>
        <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 6}}>야자타임</Text>
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
          <TouchableOpacity style={styles.btnSignIn} onPress={() => props.navigation.replace('Main')}>
            <Text style={styles.btnText}>로그인</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.btnSignUp}>
          <Text>아이디/비밀번호 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSignUp} onPress={() => props.navigation.navigate('School')}>
          <Text>회원가입</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}



function CompleteScreen(): React.ReactElement {
  return(
    <Text>Complete Screen</Text>
  );
}

function JoinScreen(props: any): React.ReactElement {
  return (
    <JoinStack.Navigator screenOptions={{
      title: '회원가입', 
      headerRight: () => (
        <TouchableOpacity
          onPress={() => props.navigation.reset({index: 0, routes: [{ name: 'Index' }]})}
          style={{marginRight: 10}}
        >
          <Icon name='close' size={23} color='#000000'/>
        </TouchableOpacity>)
    }}>
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
    backgroundColor: '#4A655A',
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
  },
  title: {
    marginTop: 40,
  },
  titleImg: {
    height: 50, 
    width: 50,
    marginTop: 70,
  }
});

export default JoinScreen;
