import {SectionList, Text} from 'react-native';
import ExStyles from '../style';

const SectionListComponent = () => {
  const users = [
    {
      name: 'John Doe',
      data: ['PHP', 'Laravel', 'Codeigniter', 'ReactJs', 'ReactNative'],
    },
    {
      name: 'John Doe',
      data: ['PHP', 'Laravel', 'Codeigniter', 'ReactJs', 'ReactNative'],
    },
    {
      name: 'John Doe',
      data: ['PHP', 'Laravel', 'Codeigniter', 'ReactJs', 'ReactNative'],
    },
  ];
  return (
    <>
      <Text style={ExStyles.mr_20}>Section List Component</Text>
      <SectionList
        style={ExStyles.mr_20}
        sections={users}
        renderItem={({item}) => <Text style={ExStyles.mr_20}>{item}</Text>}
        renderSectionHeader={({section:{name}})=> <Text style={[{color:'red'}]}>{name}</Text>}
      />
    </>
  );
};

export default SectionListComponent;
