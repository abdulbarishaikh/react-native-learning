import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ResponsiveDesignComponent = () => {
  // return <Text>WWWWW</Text>
  return (
    <View style={styles.main}>
      <View style={styles.box1}>
        <View style={styles.box1.box1}>
          <View style={styles.box1.innerBox1}></View>
          <View style={styles.box1.innerBox1}></View>
          <View style={styles.box1.innerBox1}></View>
          <View style={styles.box1.innerBox1}></View>
          <View style={styles.box1.innerBox1}></View>
        </View>
        <View style={styles.box1.box2}></View>
      </View>
      <View style={styles.box2}>
        <View style={styles.box2.innerBox1}></View>
      </View>
      <View style={styles.box3}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: 'orange',
    innerBox1: {
      backgroundColor: 'red',
      borderColor: '#000',
      borderWidth: 2,
      padding: 30,
      marginTop: 10,
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: 'auto',
    },
    box1: {
      flex: 1,
      flexDirection: 'row',
    },
    box2: {
      backgroundColor: 'yellow',
      margin: 30,
      flex:1,
    },
  },
  box2: {
    flex: 1,
    backgroundColor: 'white',
    innerBox1: {
      // color:'blue',
      textAlign: 'center',
      textAlignVertical: 'center',
      margin: 'auto',
      borderColor: 'blue',
      borderWidth: 8,
      borderRadius: 140,
      padding: 102,
    },
  },
  box3: {
    flex: 1,
    backgroundColor: 'green',
  },
});
export default ResponsiveDesignComponent;
