import {Text, View, StyleSheet} from 'react-native';
import ExStyles from '../style';

const DynamicGridComponent = () => {
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
      <Text style={{marginLeft: 20}}>Dynamic Grid List</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {users.map(function (item) {
          return <Text style={ExStyles.item} key={item.id}>{item.name}</Text>;
        })}
      </View>
    </>
  );
};
export default DynamicGridComponent;
