import {Text, View} from 'react-native';
import ExStyles from '../style';

const ExternalStyleComponent = () => {
  return (
    <>
      <View>
        <Text style={ExStyles.textBox}>Text From External Style</Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 20}}>
        <Text
          style={[
            ExStyles.textBox,ExStyles.dynamicStyle({
              color: '#000',
              padding: 10,
            }),
          ]}>
          Text From External Style
        </Text>
      </View>
    </>
  );
};

export default ExternalStyleComponent;
