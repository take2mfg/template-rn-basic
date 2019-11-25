import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native-ui-lib';

import Button from '../../../src/components/Button';

storiesOf('Button', module)
  .addDecorator(sfn => (
    <View flex center>
      {sfn()}
    </View>
  ))
  .add('default', () => <Button label="Press Me" onPress={() => alert('pressed!')} />);
