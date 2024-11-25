import React, {Component} from 'react';
import {Button, SafeAreaView, Text, TextInput, View} from 'react-native';
import ExStyles from '../../style';
class ClassWithPropStateComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: 'First Class Component',
      age: null,
    };
  }
  fruit = () => {
    console.warn('pressed');
  }
  updateName = (text) => {
    this.setState({name: text})
  }
  render() {
    return (
      <View style={ExStyles.mr_20}>
        <Text style={{color: 'red'}}>{this.state.name}</Text>
        <TextInput
          placeholder="Enter To Change Above Name"
          onChangeText={text => this.updateName(text)}
        />
        <Button title="Press Me" onPress={this.fruit} />
      </View>
    );
  }
}

export default ClassWithPropStateComponent;
