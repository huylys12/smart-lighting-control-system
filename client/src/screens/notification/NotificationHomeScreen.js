import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Notification from "./Notification";
export default function NotificationHomeScreen({navigation }) {
  return (
    <ScrollView>
      <View style={style.container}>
      <View style={{marginHorizontal:10}}>
        <View>
            <Text style={style.title}>New</Text>
            <Notification text={'Brightness of living room is just too low'} hour={'5m ago'}name={'alert-circle-outline'} color={'#599BF9'}bgcolor={'#E1E1E1'} />
            <Notification text={'No one is in the living room. Turn off all lights, please!'} hour={'15m ago'} name={'warning-outline'} color={'#FFAC3D'}bgcolor={'#E1E1E1'} />
          </View>
          <View>
            <Text style={style.title}>Before</Text>
            <Notification text={'Someone is in the living room, but the brightness is too low.'} hour={'1h ago'} name={'warning-outline'} color={'#FFAC3D'} bgcolor={'#FFFFFF'}/>
            <Notification text={'BrightNess of living room is just too high.'} hour={'1h 29m ago'} name={'alert-circle-outline'} color={'#599BF9'} bgcolor={'#FFFFFF'}/>
            <Notification text={'Brightness of living room is just too low.'} hour={'1h 29m ago'} name={'alert-circle-outline'} color={'#599BF9'} bgcolor={'#FFFFFF'}/>  
          </View>
          
      </View>

    </View>
    
    </ScrollView>
  );

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title:{
    fontWeight:'600',
    fontSize:17,
    marginTop:16,
  }
});
