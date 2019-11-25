import React from 'react';
import { ScrollView as RNScrollView, StyleSheet } from 'react-native';

function ScrollView({ children, ...rest }) {
  return (
    <RNScrollView contentContainerStyle={styles.scrollView} {...rest}>
      {children}
    </RNScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

export default ScrollView;