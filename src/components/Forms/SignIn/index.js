import React from 'react';
import get from 'lodash/get';
import { View, TextField, Text, Button } from 'react-native-ui-lib';
import useForm from 'react-hook-form';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Not a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required'),
});

function SignInForm({ onSignInPress, onSignUpPress }) {
  const { register, handleSubmit, setValue, errors } = useForm({
    validationSchema,
  });

  const onSubmit = async data => {
    onSignInPress && (await onSignInPress(data));
  };

  return (
    <View paddingH-35 paddingT-120>
      <Text blue text30 strong marginB-45>
        Sign In
      </Text>
      <TextField
        text50
        marginT-20
        placeholder="email"
        dark10
        underlineColor={{ focus: 'blue' }}
        ref={register({ name: 'email' })}
        onChangeText={text => setValue('email', text)}
        autoCapitalize="none"
        error={get(errors, 'email.message')}
      />
      <TextField
        text50
        marginT-20
        placeholder="password"
        secureTextEntry
        dark10
        underlineColor={{ focus: 'blue' }}
        ref={register({ name: 'password' })}
        onChangeText={text => setValue('password', text)}
        returnKeyType="go"
        onSubmitEditing={() => handleSubmit(onSubmit)}
        error={get(errors, 'password.message')}
      />
      <View marginT-70 center>
        <Button
          text70
          white
          background-blue
          br10
          size={Button.sizes.Large}
          label="Sign In"
          onPress={() => handleSubmit(onSubmit)()}
        />
        <Button
          link
          text70
          blue
          label="Create a Workspace"
          marginT-40
          onPress={async () => {
            onSignUpPress && (await onSignUpPress());
          }}
        />
      </View>
    </View>
  );
}

export default SignInForm;
