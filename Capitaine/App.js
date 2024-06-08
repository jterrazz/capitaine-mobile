import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

// Simple screen components
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings Screen</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile Screen</Text>
        </View>
    );
}

// Create the Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#42f44b',
                    tabBarInactiveTintColor: '#ccc',
                    headerShown: false,
                }}
            >
                <Tab.Screen name="Docs" component={HomeScreen} />
                <Tab.Screen name="Goals" component={SettingsScreen} />
                <Tab.Screen name="Routine" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}