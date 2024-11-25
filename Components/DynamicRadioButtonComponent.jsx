import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const DynamicRadioButtonComponent = () => {
  let skills = [
    {
      id: 1,
      name: 'PHP',
    },
    {
      id: 2,
      name: 'MySQL',
    },
    {
      id: 3,
      name: 'Laravel',
    },
    {
      id: 4,
      name: 'Livewire',
    },
  ];
  const [radioBtn, setRadioBtn] = useState(1);
  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity onPress={() => setRadioBtn(item.id)} key={index}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {radioBtn == item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
    marginVertical: 8,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 20,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center', // Ensure inner circle is centered
    marginRight: 10,
  },
  radioBg: {
    backgroundColor: '#000',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioText: {
    fontSize: 16,
    color: 'skyblue',
    
  },
});
export default DynamicRadioButtonComponent;
