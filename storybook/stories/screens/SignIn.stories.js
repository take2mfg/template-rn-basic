import React from 'react';
import { storiesOf } from '@storybook/react-native';

import SignIn from '../../../src/screens/SignIn';

storiesOf('SignIn', module).add('default', () => (
  <SignIn onSignInPress={props => alert(props)} onSignUpPress={() => alert('Signup Press')} />
));
