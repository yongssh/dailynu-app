import { StyleSheet, Image, Platform, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen() {
  return (
   <SafeAreaView >
    <Text style={styles.dailyIntro}>SEARCH</Text>

    <Text style={styles.dailyIntro}>CAMPUS</Text>

    <Text style={styles.dailyIntro}>CITY</Text>

    <Text style={styles.dailyIntro}>OPINION</Text>

    <Text style={styles.dailyIntro}>IN FOCUS</Text>

    <Text style={styles.dailyIntro}>OPINION</Text>

    <Text style={styles.dailyIntro}>A&E</Text>

    <Text style={styles.dailyIntro}>GAMES</Text>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  dailyIntro:{
  fontFamily: "Playfair-Display",
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
    fontFamily: "Playfair-Display",
    padding: 10,
    alignSelf: "center",
  }
});
