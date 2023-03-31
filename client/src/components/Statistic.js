import { VictoryChart, VictoryBar, VictoryGroup} from "victory-native";


export default function Statistic({data}){
    return (
      <VictoryChart domainPadding={{ x: 15 }}>
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
    )
}