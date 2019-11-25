import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';

function Posts({ navigation }) {
  return (
    <View flex center background-purple>
      <Text text50 white>
        Posts
      </Text>
      <Button
        bordered
        strong
        white
        marginT-30
        label="Open Drawer"
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
}

export default Posts;
