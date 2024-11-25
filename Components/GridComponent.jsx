import { Text, View,StyleSheet } from "react-native";
import ExStyles from '../style';

const GridComponent = () =>{
    return <>
        <Text style={{marginLeft:20}}>Grid List</Text>
        <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',marginBottom:150}}>
            <Text style={ExStyles.item}>Abdul</Text>
            <Text style={ExStyles.item}>Abdul</Text>
            <Text style={ExStyles.item}>Abdul</Text>
            <Text style={ExStyles.item}>Abdul</Text>
            <Text style={ExStyles.item}>Abdul</Text>
            <Text style={ExStyles.item}>Abdul</Text>
        </View>
    </>
}
export default GridComponent;