import React, { useCallback } from 'react';
import { StatusBar, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/core';
import { View, Text, Button } from 'react-native-ui-lib';
import { Item } from 'react-navigation-header-buttons';

import HeaderButtons from '../../components/HeaderButtons';

function Home({ navigation }) {

  // Example of changing Statusbar color
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#ecf0f1');
    }, [])
  );

  // Example of setting custom header icons
  navigation.setOptions({
    headerTransparent: false,
    headerLeft: () => (
      <HeaderButtons>
        <Item
          title="drawer"
          iconName="ios-menu"
          iconSize={32}
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons>
        <Item
          title="Settings"
          iconName="ios-settings"
          iconSize={32}
          to="Settings"
        />
      </HeaderButtons>
    ),
  });

  return (
    <View flex center background-cyan10>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text text50 white>
        Home
      </Text>
      <Button
        strong
        background-white
        cyan10
        marginT-30
        label="Open Drawer"
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
}

export default Home;
