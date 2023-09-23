import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  BackHandler,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
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

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  });

  return (
    <ScrollView>
      <View>
        <Image
          style={[style.logo]}
          source={require('../../../images/Splash.png')}
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    //   backgroundColor: '#001123',
  },
  whiteText: {
    backgroundColor: 'green',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 100,
  },
  blackText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 100,
  },
  logo: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
  },
});

export default Home;
