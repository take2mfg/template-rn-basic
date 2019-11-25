import React from 'react';
import { View, Text } from 'react-native-ui-lib';
import { API_HOST } from 'react-native-dotenv';

import ScrollView from '../../components/ScrollView';
import SignInForm from '../../components/Forms/SignIn';

function SignIn({ onSignInPress, onSignUpPress }) {
  return (
    <ScrollView>
      <SignInForm onSignInPress={onSignInPress} onSignUpPress={onSignUpPress} />
      <View center marginT-20 red50>
        <Text red20>
          Your API_HOST is {API_HOST}
        </Text>
      </View>
    </ScrollView>
  );
}

export default SignIn;
