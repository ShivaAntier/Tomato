import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
function Order() {
  return (
    <ScrollView>
      <Text style={[style.blackText]}>This is Order screen.</Text>
    </ScrollView>
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
export default Order;
