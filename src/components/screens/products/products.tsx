import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

function Product() {
  return (
    <ScrollView>
      <Text style={[style.blackText]}>This is Product screen.</Text>
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

export default Product;
