import { StyleSheet, Text, View } from 'react-native';
export default function Notification({text }) {
  return (
    <View styles={style.button}>
      <Text styles={style.buttonText}>
        {text}
      </Text>
    </View>
  )
}
const style = StyleSheet.create({
  button: {
    borderRadius:8,
    paddingVertical: 14, 
    paddingHorizontal: 10,
    backgroundColor: '#E1E1E1',
  },
  buttonText: {
    
  }
})
