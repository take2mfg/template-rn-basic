import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { API_HOST } from 'react-native-dotenv';

import ScrollView from '../../components/ScrollView';

import Form from './Form';

function SignIn({ onSignInPress, onSignUpPress }) {
  return (
    <ScrollView>
      <Form onSignInPress={onSignInPress} onSignUpPress={onSignUpPress} />
      <View center marginT-20 red50>
        <Text orange30>Your API_HOST is {API_HOST}</Text>
      </View>
    </ScrollView>
  );
}

export default SignIn;
