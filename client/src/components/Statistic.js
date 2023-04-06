import { VictoryChart, VictoryBar, VictoryGroup} from "victory-native";
import { Dimensions, ScrollView } from 'react-native';


export default function Statistic({data, type}){
    return (
      <ScrollView horizontal={true}>
      <VictoryChart domainPadding={{ x: 15 }} width={type == "Month" ? 500: Dimensions.get("screen").width}>
        
        <VictoryGroup offset={10}>
          <VictoryBar
            alignment='middle'
            data={data}
            style={{
              data:{
                fill: "#2600B4",
              },
            }}
          />
        </VictoryGroup>
        
      </VictoryChart>
      </ScrollView>
    )
}