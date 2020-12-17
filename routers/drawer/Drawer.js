import React from 'react';
import { StyleSheet } from 'react-native';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Animated from 'react-native-reanimated';

import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
import Screens from '../stack/Stack';

const Drawer = createDrawerNavigator();

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
      <View>
        <DrawerItem
          label="Dashboard"
          labelStyle={{ color: 'black', marginLeft: -16 }}
          onPress={() => props.navigation.navigate('Home')}
          icon={() => <AntDesign name="dashboard" color="black" size={16} />}
        />
        <DrawerItem
          label="Messages"
          labelStyle={{ color: 'black', marginLeft: -16 }}
          onPress={() => props.navigation.navigate('Messages')}
          icon={() => <AntDesign name="message1" color="black" size={16} />}
        />
        <DrawerItem
          label="Contact us"
          labelStyle={{ color: 'black', marginLeft: -16 }}
          onPress={() => props.navigation.navigate('Contact')}
          icon={() => <AntDesign name="phone" color="black" size={16} />}
        />
      </View>     
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          backgroundColor: 'lightgray',
          activeBackgroundColor: 'transparent',
        }}
        sceneContainerStyle={{ backgroundColor: 'lightgray' }}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
  );
};