import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon } from 'native-base';

import { COLOR, STYLE } from '../../common/styles';

const styles = StyleSheet.create({
  icon_container: {
    padding: 32,
    borderRadius: 100,
    backgroundColor: COLOR.white,
  },
  icon_content: {
    fontSize: 72,
    color: COLOR.gray_dark,
  },
  message_container: {
    padding: 32,
  },
  message_content: {
    fontSize: 18,
    color: COLOR.gray_dark,
  },
});

const DataEmpty = ({ icon, message, children }) => (
  <View style={[STYLE.flex, STYLE.flex_center, STYLE.background]}>
    {!!icon && (
      <View style={styles.icon_container}>
        <Icon name={icon} style={styles.icon_content} />
      </View>
    )}

    {!!message && (
      <View style={styles.message_container}>
        <Text style={styles.message_content}>{message}</Text>
      </View>
    )}

    {children}
  </View>
);

export { DataEmpty };