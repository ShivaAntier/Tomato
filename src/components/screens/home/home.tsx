import React from 'react';
import {Text, View, StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor: any = {
    color: isDarkMode ? Colors.lighter : Colors.chartreuse,
  };
  const backgroundStyle: any = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View style={[style.container, backgroundStyle]}>
      <Text style={[textColor]}>adfadsfadfadsf</Text>
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
    color: 'Black',
  },
});

export default Home;
