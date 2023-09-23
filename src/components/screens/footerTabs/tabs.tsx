import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../home/home';
import Order from '../orders/orders';
import Product from '../products/products';
import Manage from '../Manage/manage';
import Account from '../Account/account';
import {Image, StyleSheet, View} from 'react-native';

const Tab: any = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                style={style.tabImage}
                source={require('../../../images/TabBarIcons/home.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Order}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                style={style.tabImage}
                source={require('../../../images/TabBarIcons/home.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Product}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                style={style.tabImage}
                source={require('../../../images/TabBarIcons/pipe.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Manage"
        component={Manage}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                style={style.tabImage}
                source={require('../../../images/TabBarIcons/paint.png')}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image
                style={style.tabImage}
                source={require('../../../images/TabBarIcons/account.png')}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  tabImage: {
    width: 40,
    height: 40,
  },
});
export default Tabs;
