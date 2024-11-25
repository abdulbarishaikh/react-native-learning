import {Text, View} from 'react-native';

const MapComponent = () => {
  const users = [
    {
      id: 1,
      name: 'abdul khalique',
    },
    {
      id: 2,
      name: 'nasreen begum',
    },
    {
      id: 3,
      name: 'parveen begum',
    },
    {
      id: 4,
      name: 'abdul bari',
    },
    {
      id: 5,
      name: 'abdul majeed',
    },
    {
      id: 6,
      name: 'anjum naaz',
    },
    {
      id: 7,
      name: 'abdul malik',
    },
  ];
  return (
    <>
      <Text style={{marginLeft: 20}}>Users List Throw Map</Text>
      <View style={{marginLeft: 30}}>
        {users.map(item => (
          <Text key={item.id}>{item.name}</Text>
        ))}
      </View>
    </>
  );
};
export default MapComponent;
