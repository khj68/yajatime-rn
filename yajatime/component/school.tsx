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

DefaultTheme.colors.background = '#ffffff';

function SchoolScreen(props: any): React.ReactElement {
  const [grade, setGrade] = useState(0);
  const [search, setSearch] = useState('');
  const [school, setSchool] = useState('학교');
  
  return(
    <>
      <View style={styles.midContainer}>
        <Text style={styles.miniTitle}>학교 선택</Text>
        <View style={styles.choiceContainer}>
            <TouchableOpacity style={styles.choice} onPress={() => setSchool('중학교')}>
              <Text style={styles.btnText}>중학교</Text>            
            </TouchableOpacity>
            <TouchableOpacity style={styles.choice} onPress={() => setSchool('고등학교')}>
              <Text style={styles.btnText}>고등학교</Text>            
            </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.miniTitle}>학년</Text>
        </View>
        <View style={styles.midContent}>
          <Picker
            style={{height:50, width: '86%', borderColor:'grey', borderWidth:1}}
            selectedValue={grade}
            onValueChange={(itemValue, itemIndex) => {setGrade(itemValue); console.log('[LOG]: ' + grade+'학년')}}
          >
            <Picker.Item label='1학년' value={1} />
            <Picker.Item label='2학년' value={2} />
            <Picker.Item label='3학년' value={3} />
          </Picker>
        </View>
        <View>
          <Text style={styles.miniTitle}>{school}</Text>
        </View>
        <View style={styles.midContent}>
          <TextInput
            style={styles.textInput}
            placeholder='학교를 검색하세요.'
            paddingLeft={15}
            onChangeText={(text) => {setSearch(text);console.log(text)}}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.btnNext} onPress={() => props.navigation.navigate('Term')}>
          <Text style={styles.btnText}>다음</Text>
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

export default SchoolScreen;