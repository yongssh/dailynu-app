import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <ScrollView>
        <Text style={styles.dailyIntro}>
            The Daily Northwestern is Northwestern and Evanston's only daily news source since 1881
          </Text>

          <Text style={styles.editboardHeader}>Fall 2024 Editorial board</Text>
          
          <Text style={styles.editboard}>
            <Text style={styles.boldText}>Editor in Chief:</Text> Jacob Wendler{'\n'}
            <Text style={styles.boldText}>Print Managing Editors:</Text> Lily Ogburn, Joyce Li, William Tong{'\n'}
            <Text style={styles.boldText}>Digital Managing Editor:</Text> Carlotta Angiolillo, Sasha Draeger-Mazer{'\n'}
            <Text style={styles.boldText}>Campus Editor:</Text> Jerry Wu{'\n'}
            <Text style={styles.boldText}>City Editor:</Text> Shreya Srinivasan{'\n'}
            <Text style={styles.boldText}>Arts & Entertainment Editor:</Text> Betsy Lecy{'\n'}
            <Text style={styles.boldText}>Sports Editor:</Text> Henry Frieman{'\n'}
            <Text style={styles.boldText}>Gameday Editor:</Text> Jake Epstein{'\n'}
            <Text style={styles.boldText}>Opinion Editor:</Text> Nora Collins{'\n'}
            <Text style={styles.boldText}>Video Editor:</Text> Ashley Lee{'\n'}
            <Text style={styles.boldText}>Audio Editor:</Text> Edward Simon Cruz{'\n'}
            <Text style={styles.boldText}>Photo Editor:</Text> Shun Graves{'\n'}
            <Text style={styles.boldText}>Illustrations Editor:</Text> Iliana Garner{'\n'}
            <Text style={styles.boldText}>Data Visualizations Editor:</Text> Charlie Spungin{'\n'}
            <Text style={styles.boldText}>Crossword & Games Editor:</Text> Lillian Ali{'\n'}
            <Text style={styles.boldText}>Design Editors:</Text> Danny O’Grady, Paloma Leone-Getten{'\n'}
            <Text style={styles.boldText}>Audience Engagement Editor:</Text> Jillian Moore{'\n'}
            <Text style={styles.boldText}>Polling Editor:</Text> Scott Hwang{'\n'}
            <Text style={styles.boldText}>Social Media Editor:</Text> Kelley Lu{'\n'}
            <Text style={styles.boldText}>Newsletter Editor:</Text> Rachel Schlueter{'\n'}
            <Text style={styles.boldText}>Web Developer:</Text> Yong-Yu Huang{'\n'}
            <Text style={styles.boldText}>Copy Chief:</Text> Grace Wu{'\n'}
            <Text style={styles.boldText}>Staff Editor:</Text> Charlotte Ehrlich{'\n'}
            <Text style={styles.boldText}>Development & Recruitment Editors:</Text> Nicole Markus, Anavi Prakash, Leah Schroeder, Maya Wong{'\n'}
            <Text style={styles.boldText}>In Focus Editors:</Text> Casey He, Beatrice Villaflor{'\n'}
            <Text style={styles.boldText}>Diversity & Inclusion Chairs:</Text> Samanta Habashy, Micah Sandy{'\n'}
            <Text style={styles.boldText}>Stipend Coordinator:</Text> Micah Sandy
          </Text>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  dailyIntro: {
    fontFamily: 'Playfair-Display',
    padding: 20,
    alignSelf: 'center',
  },
  editboardHeader: {
    fontFamily: 'Playfair-Display-Bold',
    fontSize: 24,
    padding: 30,
    paddingBottom: 10,
  },
  editboard: {
    fontFamily: 'Playfair-Display',
    padding: 30,
    alignSelf: 'center',
  },
  boldText: {
    fontFamily: 'Playfair-Display-Bold',
  },
});
