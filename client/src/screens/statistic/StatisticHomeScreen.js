import { Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import { VictoryChart, VictoryBar, VictoryGroup, VictoryAxis } from "victory-native";
import Statistic from '../../components/Statistic';
import { Picker } from '@react-native-picker/picker'

import DeviceInforCard from '../../components/DeviceInfoCard';

const data = {
  week: [
    {x: "Mon", y: 100},
    {x: "Tue", y: 40},
    {x: "Wed", y: 20},
    {x: "Thu", y: 70},
    {x: "Fri", y: 30},
    {x: "Sat", y: 90},
    {x: "Sun", y: 50}
  ],
  month:[
    {x:"Jan", y: 20},
    {x:"Feb", y: 100},
    {x:"Mar", y: 50},
    {x:"Apr", y: 60},
    {x:"May", y: 70},
    {x:"Jun", y: 40},
    {x:"Jul", y: 30},
    {x:"Aug", y: 50},
    {x:"Sep", y: 90},
    {x:"Oct", y: 70},
    {x:"Nov", y: 40},
    {x:"Dec", y: 80},
  ]
}
export default function StatisticHomeScreen({navigation }) {
  const [selected,setSelected] = useState('Week')
  return (
    <ScrollView style={{backgroundColor:"white"}}>
      <View style={{marginHorizontal: 10}}>
        <View style={styles.header}>
            <Text style={{fontWeight:900}}>Energy Saving</Text>
            <Picker 
              selectedValue={selected}
              style={{ height: 50, width: 150,borderWidth:10}}
              onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}
            >
              <Picker.Item label='Week' value="Week" />
              <Picker.Item label='Month' value="Month" />
            </Picker>
        </View>
        <View style={styles.chart}>
          <Statistic data={selected == "Week" ? data.week:data.month} />
        </View>
        <Text style={{fontWeight:900}}>Expense from Device</Text>
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Dining Room"} percent={30} device={"bulb-outline"} />
        <DeviceInforCard name={"Bed Room"} percent={50} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
        <DeviceInforCard name={"Living Room"} percent={20} device={"bulb-outline"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chart: {
    flex: 1,
    backgroundColor: '#F5F5F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  header:{
    display:"flex", 
    flexDirection:"row", 
    justifyContent:"space-between", 
    alignItems:"center",
    backgroundColor:"white",
  }
});
