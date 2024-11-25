import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export const InfoBtn = () => {
  return (
    <TouchableHighlight>
      <Text style={[styles.button]}>Info</Text>
    </TouchableHighlight>
  );
};
export const PrimaryBtn = () => {
  return (
    <TouchableHighlight>
      <Text style={[styles.button, styles.primary]}>Primary</Text>
    </TouchableHighlight>
  );
};
export const SuccessBtn = () => {
  return (
    <TouchableHighlight>
      <Text style={[styles.button, styles.success]}>Success</Text>
    </TouchableHighlight>
  );
};
export const DangerBtn = () => {
  return (
    <TouchableHighlight onPress={()=>console.log('pressed')}>
      <Text style={[styles.button, styles.danger]}>Danger</Text>
    </TouchableHighlight>
  );
};
export const WarningBtn = () => {
  return (
    <TouchableHighlight>
      <Text style={[styles.button, styles.warning]}>Warning</Text>
    </TouchableHighlight>
  );
};

export const ButtonsComponent = () => {
  return (
    <View>
      <SuccessBtn />
      <PrimaryBtn />
      <WarningBtn />
      <DangerBtn />
      <InfoBtn />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ddd',
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 10,
    shadowOpacity: 1,
  },
  success: {
    backgroundColor: 'green',
  },
  primary: {
    backgroundColor: 'blue',
  },
  danger: {
    backgroundColor: 'red',
  },
  warning: {
    backgroundColor: 'gold',
  },
  warning: {
    backgroundColor: 'gold',
  },
});
export default ButtonsComponent;
