import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native'
import {AuthContext} from '../../routes/AuthProvider'
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function createAccount() {
  const [email, setEmail] = useState('');
  const [passWord, setPassword] = useState('');
  const navigation = useNavigation(); 
  const {login} = useContext(AuthContext)

function navigateToCreateAccount() {
  navigation.navigate('CreateAccount')
}

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === 'ios'}
      behavior="padding"
      style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>SEU E-MAIL *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          returnKeyType="next"

        />

        <Text style={styles.label}>SENHA *</Text>
        <TextInput
          style={styles.input}

          placeholder="Sua Senha"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={passWord}
          onChangeText={setPassword}
          secureTextEntry={true}
          onSubmitEditing={() => login(email,passWord)}
          returnKeyType="send"

        />

        <TouchableOpacity onPress={() => login(email,passWord)} style={styles.button}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>

<TouchableOpacity onPress={navigateToCreateAccount}>
<Text style={[styles.label, styles.accountCreate ]}>CRIAR CONTA *</Text>
</TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}
