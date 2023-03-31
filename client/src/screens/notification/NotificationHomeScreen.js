import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Notification from "./Notification";
export default function NotificationHomeScreen({navigation }) {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.new}>New</Text>
        <Notification text={'Brightness of living room is just too low'} hour={'5m ago'}name={'notifications'}/>
        <Notification text={'No one is in the living room.'} hour={'15m ago'} name={'notifications'}/>
      </View>
      <View>
        <Text style={style.before}>Before</Text>
        <Notification text={'Someone is in the living room, but the brightness is too low.'} hour={'1h ago'} name={'notifications'}/>
        <Notification text={'BrightNess of living room is just too high.'} hour={'1h 29m ago'} name={'notifications'}/>
      </View>

    </View>
    
  );

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  new: {
    left:16,
    height:30,
    fontSize: 20,
    fontStyle: 'normal',
    color: '#000000',
    fontWeight: 'bold',
  },
  before:{
    top:16,
    left:16,
    height:30,
    fontSize: 20,
    fontStyle: 'normal',
    color: '#000000',
    fontWeight: 'bold',
  }
});
