import React,{useContext} from 'react';
import {AuthContext} from '../../routes/AuthProvider'

import {View, Button,Text} from 'react-native';

const Profile = () => {
const {user ,logout} = useContext(AuthContext);

  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>olá {user.uid}</Text>
      <Button onPress={()=>logout()} title="Sair" color="#000" />
    </View>
  );
};

export default Profile;
