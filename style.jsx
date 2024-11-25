import {Text, View, StyleSheet} from 'react-native';
export default ExStyles = StyleSheet.create({
  textBox: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'lightblue',
  },
  dynamicStyle: function (styles) {
    return styles;
  },
  item: {
    color: '#fff',
    fontSize: 25,
    borderColor: 'red',
    borderWidth: 2,
    // height:80,
    width: 100,
    padding: 5,
    backgroundColor: 'blue',
    textAlignVertical: 'center',
    textAlign: 'center',
    margin: 5,
  },
  mr_20:{
    marginLeft: 20
  }
});
