import React,{useEffect} from "react";
import { Image, View, StyleSheet,StatusBar,useColorScheme} from "react-native";
import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

function Splash (navigation:any){
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate();
        }, 2000);
        },[]);
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle:any = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };
    return(
        <View style={[styles.container,backgroundStyle]}>
            <StatusBar backgroundColor="#001123" />
            <Image style={styles.logo} source={require('../../../images/Splash.png')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    //   backgroundColor: '#001123',
    },
    logo: {
      height: 300,
      width: 300,
      resizeMode:'contain'
    },
    red: {
      color: 'red',
    },
  });

export default Splash;