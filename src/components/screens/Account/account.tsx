import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

function Account() {
  return (
    <View style={style.container}>
      <Text style={[style.blackText]}>This is account screen.</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //   backgroundColor: '#001123',
  },
  whiteText: {
    color: 'White',
  },
  blackText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
export default Account;
