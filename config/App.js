import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from "react-native-tab-view/lib/typescript/example/src/Shared/Profile";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Welcome'}}
                />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeScreen({navigation}) {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
        />
    );
}
