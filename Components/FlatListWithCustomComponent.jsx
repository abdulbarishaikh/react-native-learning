import {FlatList, StyleSheet, Text, View} from 'react-native';

const FlatListWithCustomComponent = () => {
  const users = [
    {
      id: 1,
      name: 'abdul khalique',
      email: 'abdulkhalique@gmail.com',
    },
    {
      id: 2,
      name: 'nasreen begum',
      email: 'nasreenbegum@gmail.com',
    },
    {
      id: 3,
      name: 'parveen begum',
      email: 'parveenbegum@gmail.com',
    },
    {
      id: 4,
      name: 'abdul bari',
      email: 'abdulbari@gmail.com',
    },
    {
      id: 5,
      name: 'abdul majeed',
      email: 'abdulmajeed@gmail.com',
    },
    {
      id: 6,
      name: 'anjum naaz',
      email: 'anjumnaaz@gmail.com',
    },
    {
      id: 7,
      name: 'abdul malik',
      email: 'abdulmalik@gmail.com',
    },
    {
      id: 8,
      name: 'abdul malik',
      email: 'abdulmalik@gmail.com',
    },
    {
      id: 9,
      name: 'abdul malik',
      email: 'abdulmalik@gmail.com',
    },
    {
      id: 10,
      name: 'abdul malik',
      email: 'abdulmalik@gmail.com',
    },
    {
      id: 11,
      name: 'abdul malik',
      email: 'abdulmalik@gmail.com',
    },
    {
      id: 12,
      name: 'abdul malik',
      email: 'abdulmalik@gmail.com',
    },
    {
      id: 13,
      name: 'abdul malik',
      email: 'abdulmalik@gmail.com',
    },
    {
        id: 14,
        name: 'abdul malik',
        email: 'abdulmalik@gmail.com',
      },
  ];
  return (
    <>
      <Text style={{marginLeft: 20}}>List With Component</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <UserData item={item} />}
      />
    </>
  );
};
const UserData = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    marginBottom: 10,
    margin: 2,
  },
  item: {
    fontSize: 20,
    flex: 1,
    // padding:2,
    margin: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
export default FlatListWithCustomComponent;
