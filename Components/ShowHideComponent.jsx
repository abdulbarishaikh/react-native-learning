import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import ExStyles from '../style';

const User = () => {
  return (
    <View>
      <Text style={{marginLeft: 30}}>User Component Showing</Text>
    </View>
  );
};

const ShowHideComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={ExStyles.mr_20}>ShowHideComponent</Text>
      <Button title="Hide User Component" onPress={()=> setShow(false)} />
      <View style={{marginTop: 10}}>
        <Button title="Show User Component" onPress={()=> setShow(true)} />
      </View>
      {show ? <User /> : null}
    </View>
  );
};

export default ShowHideComponent;
