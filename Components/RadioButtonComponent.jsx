import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const RadioButtonComponent = () => {
  const [radioBtn, setRadioBtn] = useState(1);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>setRadioBtn(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {radioBtn == 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Yes</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setRadioBtn(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {radioBtn == 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>No</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 20,
    margin: 4,
  },
  radioBg: {
    backgroundColor: '#000',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioText:{
    color:'skyblue'
  }
});
export default RadioButtonComponent;
