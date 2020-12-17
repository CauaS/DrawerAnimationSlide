import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

import Dashboard from '../../src/pages/Dashboard';
import Contacts from '../../src/pages/Contacts';
import Messages from '../../src/pages/Messages';

import { StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const Screens = ({ navigation, style }) => {
    return (
      <Animated.View style={StyleSheet.flatten([ { flex: 1, overflow: 'hidden' }, style])}>
        <Stack.Navigator
          screenOptions={{
            headerTransparent: true,
            headerTitle: null,
            headerLeft: () => (
              <TouchableOpacity transparent onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 10 }} />
              </TouchableOpacity>
            ),
          }}>
          <Stack.Screen name="Home">{props => <Dashboard {...props} />}</Stack.Screen>
          <Stack.Screen name="Messages">{props => <Messages {...props} />}</Stack.Screen>
          <Stack.Screen name="Contact">{props => <Contacts {...props} />}</Stack.Screen>
        </Stack.Navigator>
      </Animated.View>
    );
  };

export default Screens;