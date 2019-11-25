import React from 'react';

import ScrollView from '../../components/ScrollView';
import SignInForm from '../../components/Forms/SignIn';

function SignIn({ onSignInPress, onSignUpPress }) {
  return (
    <ScrollView>
      <SignInForm onSignInPress={onSignInPress} onSignUpPress={onSignUpPress} />
    </ScrollView>
  );
}

export default SignIn;
