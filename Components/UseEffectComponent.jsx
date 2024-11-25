import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import ExStyles from '../style';

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('called when component updates');
  });
  useEffect(() => {
    console.log('called only one time when component loading');
  }, []);
  useEffect(() => {
    console.log('called when state changed');
  }, [count]);
  return (
    <View>
      <Text style={ExStyles.mr_20}>UseEffectComponent {count}</Text>
      <Button
        title="Update Count"
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </View>
  );
};
export default UseEffectComponent;
