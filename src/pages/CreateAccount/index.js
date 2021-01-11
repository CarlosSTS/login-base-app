import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import { AuthContext } from '../../routes/AuthProvider'
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
  const [confirmPassWord, setConfirmPassWord] = useState('');

  const navigation = useNavigation()
  const { register } = useContext(AuthContext)

  function navigateToBack() {
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === 'ios'}
      behavior="padding"
      style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>CADASTRE SEU E-MAIL *</Text>

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

        <Text style={styles.label}>CADASTRE UMA SENHA *</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua Senha"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={passWord}
          onChangeText={setPassword}
          secureTextEntry={true}
          returnKeyType="next"

        />


        <TouchableOpacity onPress={() => register(email, passWord)} style={styles.button}>
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToBack}>
          <Text style={[styles.label, styles.accountCreate]}>VOLTAR PARA LOGIN *</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}
