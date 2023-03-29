import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
