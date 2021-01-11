import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';

export default function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: true,
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#3d9be9',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Auth.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
      
      <Auth.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          title: 'Criar Conta',
        }}
      />


    </Auth.Navigator>
  );
}
