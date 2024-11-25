import React from 'react';
import {Text, View,StyleSheet } from 'react-native';

const InternalStyleComponent = () => {
  return (
    <>
      <View>
        <Text style={styles.textBox}>Text From Internal Style</Text>
        <Text style={styles.textBox}>Extra Style</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textBox:{
    color:'green',
    fontSize:18,
    backgroundColor:'lightblue',
    margin:4,
    paddingLeft:20,
    borderRadius:10,
    height:30,
    textAlign:'center',
    textAlignVertical:'center',
    borderColor:'red',
    borderWidth:2
  }
});

export default InternalStyleComponent;
