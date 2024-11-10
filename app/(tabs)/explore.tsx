import { StyleSheet, Image, Platform, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
   <SafeAreaView >
    <Text style={styles.dailyIntro}> The Daily Northwestern is Northwestern and Evanston's only daily news source since 1881</Text>
    <Text style={styles.masthead}>
      Editor
    </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dailyIntro:{
  fontFamily: "PlayfairDisplay",
  padding: 10,
  alignSelf: "center",
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  masthead:{
    fontFamily: "PlayfairDisplay",
    padding: 10,
    alignSelf: "center",
  }
});
