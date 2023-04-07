import { ScrollView, StyleSheet, Text, View,TextInput, Dimensions,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Tooltip } from 'react-native-elements';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
import { Picker } from "@react-native-picker/picker"
import InforCard from '../../components/InforCard';
import CompletedCard from '../../components/CompleteCard';


export default function ScheduleHomeScreen({navigation}) {
  const [displayCalendar,setDisplayCanlendar] = useState(false);
  const [completedVisible, setCompletedVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.view_1}>
        <Tooltip popover={<Text>Emilia</Text>} backgroundColor={"lightgray"}>
          <Avatar
            size="medium"
            rounded
            source={{
              uri:
                'https://i.pinimg.com/236x/90/d9/16/90d9162108f48527f35763eaa962ccf1--emilia-manga.jpg',
            }}
          />
        </Tooltip>
        <View style={{marginHorizontal: 16}}>
          <Text style={{opacity: 0.5,color:"#384EC7"}}>Friday</Text>
          <Text style={{fontSize: 20,color:"#384EC7",fontWeight:700}}>10 March</Text>
        </View>
      </View>
      <View style={styles.view_2}>
        <TextInput placeholder='Which schedule are you looking for?'
          style={{borderWidth: 0.3,width:"90%",borderRadius: 25,paddingHorizontal:16,paddingVertical: 5,borderColor:"#384EC7",fontSize:14}} />
          <View style={{borderWidth:1,borderRadius:50,padding: 10,borderWidth: 0.3,borderColor:"#384EC7"}}>
            <Ionicons name='search-outline' size={14}></Ionicons>
          </View>
      </View>
      <View style={styles.view_3}>
        <View style={{display:"flex",flexDirection:"row"}}>
          <TouchableOpacity style={{borderWidth: 0.3, padding: 5, borderRadius: 25,marginRight: 8,backgroundColor:"#384EC7"}}><Text style={{color:"white"}}>My Schedules</Text></TouchableOpacity>
          <TouchableOpacity style={{borderWidth: 0.3, padding: 5, borderRadius: 25,borderColor:"#384EC7"}}><Text style={{color:'#4B61DD'}}>Scenes</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={{fontWeight: 600}} onPress={() => setDisplayCanlendar(true)}><Text style={{color:'#4B61DD',fontWeight:700}}>+ New</Text></TouchableOpacity>
      </View>
      <InforCard section={"Pendant Lamp in Living Room"} subsection={"2 hrs - 11.30 pm"} />
      <InforCard section={"Recessed fixtured in Living Room"} subsection={"1 hrs - 16.30 am"} />
      <View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical: 16}}>
            <Ionicons name="checkmark-outline" size={20} style={{color:"#384EC7",fontWeight:700}} />
            <Text style={{marginLeft: 8,color:"#384EC7",fontWeight:700}}>Completed</Text>
          </View>
          <Ionicons name="chevron-down-outline" size={20} style={{color: "#384EC7"}} onPress={() => {
            if(completedVisible){
              setCompletedVisible(false);
            }
            else setCompletedVisible(true);
            
          }} />
        </View>
      </View>
      {
          completedVisible ? (
            <ScrollView>
              <CompletedCard section={"Training"} subsection={"2 hrs - 11.30 pm"} />
              <CompletedCard section={"Training"} subsection={"2 hrs - 11.30 pm"} />
              <CompletedCard section={"Training"} subsection={"2 hrs - 11.30 pm"} />
              <CompletedCard section={"Training"} subsection={"2 hrs - 11.30 pm"} />
              <CompletedCard section={"Training"} subsection={"2 hrs - 11.30 pm"} />
              <CompletedCard section={"Training"} subsection={"2 hrs - 11.30 pm"} />
              <CompletedCard section={"Training"} subsection={"2 hrs - 11.30 pm"} />
              <CompletedCard section={"Training"} subsection={"2 hrs - 11.30 pm"} />
            </ScrollView>
          ): null
        }
      {displayCalendar ? (
         <ScrollView style={styles.overlay}>
          <View style={{display:"flex",alignItems:"center",marginTop: 8}}>
            <Ionicons name="chevron-down-outline" size={20} style={{color:"#384EC7"}} onPress={() => setDisplayCanlendar(false)} />
            <Calendar
              monthFormat={'MMMM, yyyy'}
              style={{width: Dimensions.get('screen').width*0.95}}
            />
            <View style={{display:"flex",flexDirection:"row", width:Dimensions.get('screen').width*0.95, alignItems:"center",borderTopWidth: 0.5,paddingVertical:8}}>
              <Ionicons name="calendar-outline" size={20} style={{marginRight:16,color:"#384EC7"}} />
              <Text style={{color:"#384EC7",fontSize:16}}>Set date</Text>
            </View>
            <View style={{display:"flex",flexDirection:"row",width:Dimensions.get('screen').width*0.95, alignItems:"center",borderTopWidth: 0.5,paddingVertical:8}}>
              <Ionicons name="time-outline" size={20} style={{marginRight:16,color:"#384EC7"}}/>
              <Text style={{color:"#384EC7",fontSize:16}}>Set time</Text>
            </View>
            <View style={{display:"flex",flexDirection:"row",width:Dimensions.get('screen').width*0.95, alignItems:"center",justifyContent: "space-between",borderTopWidth: 0.5,paddingVertical:8}}>
              <View style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="home-outline" size={20} style={{marginRight:16,color:"#384EC7"}}></Ionicons>
                <Text style={{color:"#384EC7",fontSize:16}}>Select Room</Text>
              </View>
                <Picker
                  style={{ width: 150,height:50,color:"#384EC7"}}
                  mode='dropdown'
                >
                  <Picker.Item label='Living Room' value="Living Room" />
                  <Picker.Item label='Bed Room' value="Bed Room" />
                </Picker>
            </View>
            <View style={{display:"flex",flexDirection:"row",width:Dimensions.get('screen').width*0.95, alignItems:"center",justifyContent: "space-between",borderTopWidth: 0.5,paddingVertical:8,borderBottomWidth: 0.5}}>
              
              <View style={{display:"flex", flexDirection:"row",alignItems:"center"}}>
                <Ionicons name="bulb-outline" size={20} style={{marginRight:16,color:"#384EC7"}}></Ionicons>
                <Text style={{color:"#384EC7",fontSize:16}}>Select Lamp</Text>
              </View>
                <Picker
                  style={{ width: 150,height:50, color:"#384EC7"}}
                  mode='dropdown'
                >
                  <Picker.Item label='Lamp 1' value="Lamp 1" />
                  <Picker.Item label='Lamp 2' value="Lamp 2" />
                </Picker>
            </View>
            <TouchableOpacity
            style={{backgroundColor: "#4B61DD",width: Dimensions.get('screen').width*0.9,marginTop:10,borderRadius:25,marginBottom: 16}}
            >
              <Text style={{fontSize: 20,textAlign:"center",margin: 16,color:"white"}}>Save</Text>
            </TouchableOpacity>
            </View>
       </ScrollView>
       
      ): null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  view_1:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center"
  },
  view_2:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",
    marginTop:8
  },
  view_3:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:8
  },
  overlay:{
    display:"flex",
    flexDirection:'column',
    backgroundColor: "white",
    height: "95%",
    width: Dimensions.get('screen').width,
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -10
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    elevation: 10
  },
});
