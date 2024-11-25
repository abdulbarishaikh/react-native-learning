import React, {Component} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import ExStyles from '../../style';
class ClassComponent extends Component {
  fruit = () => {
    console.warn('pressed');
  };
  render() {
    return (
        <View style={ExStyles.mr_20}>
          <Text style={{color: 'red'}}>First Class Component</Text>
          <Button title="Press Me" onPress={this.fruit} />
        </View>
    );
  }
}

export default ClassComponent;
