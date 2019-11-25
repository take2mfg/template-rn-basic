import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text, Colors } from 'react-native-ui-lib';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Item } from 'react-navigation-header-buttons';

import HeaderButtons from '../../../src/components/HeaderButtons';

function Page() {
  return (
    <View flex center>
      <Text>Sample Page</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const screenOptions = {};

storiesOf('HeaderButtons', module)
  .addDecorator(sfn => (
    <NavigationNativeContainer>{sfn()}</NavigationNativeContainer>
  ))
  .add('default', () => (
    <Stack.Navigator initialRouteName="Page1" screenOptions={screenOptions}>
      <Stack.Screen
        name="Page1"
        component={Page}
        options={{
          headerRight: () => (
            <HeaderButtons>
              <Item title="Page 2" to="Page2" color={Colors.iosBlue} />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen name="Page2" component={Page} />
    </Stack.Navigator>
  ))
  .add('with icon', () => (
    <Stack.Navigator initialRouteName="Page1" screenOptions={screenOptions}>
      <Stack.Screen
        name="Page1"
        component={Page}
        options={{
          headerRight: () => (
            <HeaderButtons>
              <Item
                title="Page 2"
                iconName="ios-settings"
                to="Page2"
                color={Colors.iosBlue}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen name="Page2" component={Page} />
    </Stack.Navigator>
  ))
  .add('with icon size', () => (
    <Stack.Navigator initialRouteName="Page1" screenOptions={screenOptions}>
      <Stack.Screen
        name="Page1"
        component={Page}
        options={{
          headerRight: () => (
            <HeaderButtons>
              <Item
                title="Page 2"
                iconName="ios-settings"
                to="Page2"
                iconSize={40}
                color={Colors.iosBlue}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen name="Page2" component={Page} />
    </Stack.Navigator>
  ))
  .add('multi', () => (
    <Stack.Navigator initialRouteName="Page1" screenOptions={screenOptions}>
      <Stack.Screen
        name="Page1"
        component={Page}
        options={{
          headerRight: () => (
            <HeaderButtons>
              <Item
                title="Page 2"
                iconName="ios-settings"
                to="Page2"
                color={Colors.iosBlue}
              />
              <Item
                title="Page 3"
                iconName="ios-arrow-forward"
                to="Page3"
                color={Colors.iosBlue}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen name="Page2" component={Page} />
      <Stack.Screen name="Page3" component={Page} />
    </Stack.Navigator>
  ))
  .add('left (onPress)', () => (
    <Stack.Navigator initialRouteName="Page1" screenOptions={screenOptions}>
      <Stack.Screen
        name="Page1"
        component={Page}
        options={{
          headerLeft: () => (
            <HeaderButtons>
              <Item
                title="Page 2"
                iconName="ios-menu"
                onPress={() => alert('Press!')}
                color={Colors.iosBlue}
              />
            </HeaderButtons>
          ),
        }}
      />
      <Stack.Screen name="Page2" component={Page} />
    </Stack.Navigator>
  ));
