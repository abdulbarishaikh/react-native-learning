import {Button, Text, View} from 'react-native';

const FirstComponent = () => {
  const getData = data => {
    console.warn('data', data);
  };
  return (
    <View style={{marginTop: 10}}>
      <Text style={{fontSize: 30, marginLeft: 10, color: 'red'}}>
        Hello React Native
      </Text>
      <Text style={{fontSize: 30}}>
        Abdul Bari{' '}
        <Text style={{color: 'pink', backgroundColor: 'black'}}>Shaikh</Text>
      </Text>
      <Text style={{fontSize: 30, backgroundColor: 'yellow'}}>
        Abdul Khalique Shaikh
      </Text>
      <View style={{marginTop: '10%'}}>
        <Button
          title="Press Me"
          color={'red'}
          fontSize={40}
          onPress={() => {
            console.warn('pressed');
          }}
        />
        <View style={{marginTop: 10}}>
          <Button
            title="Press To Pass Data"
            color={'red'}
            onPress={() => {
              getData('welcome');
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default FirstComponent;
