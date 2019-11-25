import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';

function Dashboard({ navigation }) {
  return (
    <View flex center background-cyan10>
      <Text text50 white>
        Dashboard
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

export default Dashboard;
