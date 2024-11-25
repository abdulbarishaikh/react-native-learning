import {FlatList, Text, SafeAreaView} from 'react-native';

const FlatListComponent = () => {
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
      <Text style={{marginLeft: 20}}>Flat List Component</Text>
      <SafeAreaView>
        <FlatList
          data={users}
          renderItem={({item}) => (
            <Text style={{marginLeft: 30}}>{item.name}</Text>
          )}
        />
      </SafeAreaView>
    </>
  );
};
export default FlatListComponent;
