import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
const buttonStyle = {margin: 'auto', paddingTop: 10, width: 200};
const StateComponent = () => {
  let [name, setName] = useState('Old Name');
  const [oldName,setOldName] = useState(name);
  return (
    <>
      <Text style={{fontSize: 20, marginLeft: 20}}>{name}</Text>
      <View style={buttonStyle}>
        <Button
          title="Press For New Name"
          onPress={() => {
            setName('New Name');
          }}
        />
      </View>
      <View style={buttonStyle}>
        <Button
          title="Press For Old Name"
          onPress={() => {
            setName(oldName);
          }}
        />
      </View>
    </>
  );
};

export default StateComponent;
