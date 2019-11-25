import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  HeaderButtons as RNHeaderButtons,
  HeaderButton,
} from 'react-navigation-header-buttons';
import { Colors } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/core';

function IoniconsHeaderButton({
  color = Colors.blue10,
  iconSize = 23,
  onPress,
  to,
  ...passMeFurther
}) {
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  const navigation = useNavigation();

  function handlePress() {
    if (onPress) {
      onPress({ navigation });
      return;
    }

    if (to) {
      navigation.navigate(to);
    }
  }

  return (
    <HeaderButton
      {...passMeFurther}
      IconComponent={Ionicons}
      iconSize={iconSize}
      color={color}
      onPress={handlePress}
    />
  );
}

function HeaderButtons({ children }) {
  return (
    <RNHeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      {children}
    </RNHeaderButtons>
  );
}

export default HeaderButtons;
