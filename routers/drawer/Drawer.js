import React from 'react';
import { Text, View } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Screens from '../stack/Stack'

const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} >
      <View>
        <View style={{ margin: 15 }}>
          <Text style={{ fontSize: 25}}>Welcome Cali</Text>
        </View>
        <DrawerItem
          label="Dashboard"
          labelStyle={{ marginLeft: -10 }}
          onPress={() => props.navigation.navigate("Dashboard")}
          icon={ () => <AntDesign name="dashboard" size={16}/> }
        />
        <DrawerItem
          label="Contacts"
          labelStyle={{ marginLeft: -10 }}
          onPress={() => props.navigation.navigate("Contacts")}
          icon={ () => <AntDesign name="phone" size={16}/> }
        />
        <DrawerItem
          label="Messages"
          labelStyle={{ marginLeft: -10 }}
          onPress={() => props.navigation.navigate("Messages")}
          icon={ () => <AntDesign name="message1" size={16}/> }
        />
      </View>
    </DrawerContentScrollView>
  )
}

export default () => {
  return(
    <Drawer.Navigator 
        initialRouteName="Dashboard"
        drawerContent={ (props) => <DrawerContent {...props} /> }
    >
        <Drawer.Screen name="Screens" component={Screens} />
    </Drawer.Navigator>
  );
}