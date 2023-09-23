import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <View>
      <View>
        <Text style={[style.login]}>login</Text>
      </View>
      <View style={[style.view]}>
        <TextInput style={style.input} placeholder="Enter Email " />
        <TextInput style={style.input} placeholder="Enter Email " />
        <Button title="Login" onPress={() => {}} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  login: {
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
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Login;
