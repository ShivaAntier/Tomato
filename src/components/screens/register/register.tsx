import React from 'react';
import {
  Button,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

function Register() {
  return (
    <View style={{flex: 1, backgroundColor: '#f2dedc'}}>
      <View style={style.register}>
        <Text style={style.register}>Register</Text>
      </View>
      <View style={style.view}>
        <TextInput placeholder="Enter Email" style={style.input} />
        <TextInput placeholder="Enter Phone" style={style.input} />
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            width: '80%',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: '#bbb',
            borderRadius: 5,
            marginBottom: 12,
          }}>
          <TextInput
            placeholder="Password"
            style={{
              width: '95%',
              padding: 10,
            }}
            // secureTextEntry={Visible}
          />
          <TouchableOpacity
            onPress={() => {
              //   setVisible(!Visible);
              //   setShow(!show);
            }}>
            <Image
              style={{
                width: 10,
                height: 10,
                alignItems: 'center',
                marginRight: 10,
              }}
              source={require('../../../images/Splash.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'red',
            alignItems: 'center',
            width: '80%',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: '#bbb',
            borderRadius: 5,
            marginBottom: 12,
          }}>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={'black'}
            style={{
              width: '95%',
              padding: 10,
            }}
            // secureTextEntry={Visible}
          />
          {/* <TouchableOpacity
            onPress={() => {
              setVisible(!Visible);
              setShow(!show);
            }}> */}
          <Image
            style={{
              width: 10,
              height: 10,
              alignItems: 'center',
              marginRight: 10,
            }}
            source={require('../../../images/Splash.png')}
          />
          {/* </TouchableOpacity> */}
        </View>
        <Button title="Register" />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>I already have an account! </Text>
          {/* <TouchableOpacity onPress={() => props.navigation.navigate('Login')}> */}
          <Text style={style.link}>Login</Text>
          {/* </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  view: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  warpper: {
    width: '80%',
  },
  register: {
    flex: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 30,
  },

  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    width: '80%',
    padding: 10,
  },
  link: {
    color: 'blue',
  },
});
export default Register;
