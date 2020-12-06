import React, {
  useEffect,
  useState,
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
  TouchableHighlight,
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

import { Picker } from '@react-native-picker/picker';

import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';

import CheckBox from '@react-native-community/checkbox';

DefaultTheme.colors.background = '#ffffff';

function TermLine(props: any) {
  const [toggle, setToggle] = useState(false);
  return(
    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
      <CheckBox 
        disabled={false}
        value={toggle}
        onValueChange={(newValue) => setToggle(newValue)}
      />
      <Text>{props.text}</Text>
    </View>
  )
}

function TermScreen(props: any): React.ReactElement {
  const [code, setCode] = useState('');
  
  return(
    <>
      <View style={styles.midContainer}>
        <View>
          <Text style={styles.miniTitle}>약관 동의</Text>
        </View>
        <View>
          <TermLine text='아래 약관에 모두 동의합니다.'/>
          <TermLine text='아래 약관에 모두 동의합니다.'/>
          <TermLine text='아래 약관에 모두 동의합니다.'/>
          <TermLine text='아래 약관에 모두 동의합니다.'/>
          <TermLine text='아래 약관에 모두 동의합니다.'/>
          <TermLine text='본인 명의를 이용하여 가입을 진행하겠습니다.'/>
          <TermLine text='만 14세 이상입니다.'/>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.btnNext} onPress={() => props.navigation.navigate('Term')}>
          <Text style={styles.btnText}>휴대폰 인증</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.textInput}
          placeholder='인증번호를 입력하세요.'
          paddingLeft={15}
          onChangeText={(text) => {setCode(text);console.log(text)}}
        />
        <TouchableOpacity style={styles.btnNext} onPress={() => props.navigation.navigate('Detail')}>
          <Text style={styles.btnText}>인증번호 확인</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer:{
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: 35,
    marginTop: 16,
  },
  midContainer:{
    flex: 6,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'white',
  },
  bottomContainer:{
    flex: 6,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'grey',
  },
  choiceContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  textInput: {
    height: 40,
    width: '85%',
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 5,
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
  topText: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  choice: {
    width: 150,
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#4A655A',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnNext: {
    height: 40,
    width: '85%',
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 4,
    backgroundColor: '#4A655A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniTitle: {
    marginTop: 25, 
    marginLeft: 35,
    fontWeight: 'bold',
  },
  midContent: {
    alignItems:'center'
  }
});

export default TermScreen;