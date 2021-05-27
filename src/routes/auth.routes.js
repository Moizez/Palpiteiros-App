import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator();

const AuthRoutes = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerStyle: {
                        backgroundColor: '#022c6f',
                        borderBottomWidth: 1,
                        borderBottomColor: '#000',
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: ''
                }}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;
