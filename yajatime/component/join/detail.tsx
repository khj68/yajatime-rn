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

function DetailScreen(props: any): React.ReactElement {
  return(
    <>
      <View style={styles.topContainer}>
        <Text>본인인증이 완료 되었습니다!</Text>
        <Text>추가 정보를 입력해주세요.</Text>
      </View>
      <View style={styles.midContainer}>
        <Text style={styles.miniTitle}>이름</Text>
        <View style={styles.midContent}>
          <TextInput
            style={styles.textInput}
            placeholder='이름'
            paddingLeft={15}
            onChangeText={(text) => {}}
          />
        </View>
        <Text style={styles.miniTitle}>별명</Text>
        <View style={styles.midContent}>
          <TextInput
            style={styles.textInput}
            placeholder='별명'
            paddingLeft={15}
            onChangeText={(text) => {}}
          />
        </View>
        <Text style={styles.miniTitle}>메일</Text>
        <View style={styles.midContent}>
          <TextInput
            style={styles.textInput}
            placeholder='메일'
            paddingLeft={15}
            onChangeText={(text) => {}}
          />
        </View>
        <Text style={styles.miniTitle}>학생증</Text>
        <View style={styles.midContent}>
          <TextInput
            style={styles.textInput}
            placeholder='앨범에서 선택'
            paddingLeft={15}
            onChangeText={(text) => {}}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.btnNext} onPress={() => props.navigation.navigate('Complete')}>
          <Text style={styles.btnText}>완료</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // marginLeft: 35,
    // marginTop: 16,
  },
  midContainer:{
    flex: 6,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'white',
  },
  bottomContainer:{
    flex: 4,
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

export default DetailScreen;