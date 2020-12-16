import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../../src/pages/Dashboard';
import Contacts from '../../src/pages/Contacts';
import Messages from '../../src/pages/Messages';

import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();

const Screens = ({ navigation }) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: null,
                headerLeft: () => (
                    <TouchableOpacity 
                        style={{ margin: 10, padding: 10 }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Feather name="menu" size={24} />
                    </TouchableOpacity>
                )
            }}
        >
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen name="Messages" component={Messages} />
        </Stack.Navigator>
    );
}

export default Screens;