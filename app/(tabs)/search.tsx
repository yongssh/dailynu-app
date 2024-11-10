import {TouchableOpacity, View,  StyleSheet, Image, Platform, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Link, useNavigation, useRouter} from "expo-router";

export default function SearchScreen() {


  const router = useRouter();
  const navigation = useNavigation();
  return (
   <SafeAreaView >
    <View style={styles.mainContainer}> 

    <TouchableOpacity style={styles.categoryContainer} 

      onPress={() => router.push({
          // path to the ArticleScreen bc in same folder
          pathname: '/screens/CampusScreen',  
      })}>
    <Text style={styles.dailyIntro}>CAMPUS</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.categoryContainer} 

      onPress={() => router.push({
          // path to the ArticleScreen bc in same folder
          pathname: '/screens/CityScreen',  
      })}>
      <Text style={styles.dailyIntro}>CITY</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.categoryContainer} 

      onPress={() => router.push({
          // path to the ArticleScreen bc in same folder
          pathname: '/screens/OpinionScreen',  
      })}>
      <Text style={styles.dailyIntro}>OPINION</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.categoryContainer} 

      onPress={() => router.push({
          // path to the ArticleScreen bc in same folder
          pathname: '/screens/IFScreen',  
      })}>
      <Text style={styles.dailyIntro}>IN FOCUS</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.categoryContainer} 

      onPress={() => router.push({
          // path to the ArticleScreen bc in same folder
          pathname: '/screens/AEScreen',  
      })}>
      <Text style={styles.dailyIntro}>A&E</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.categoryContainer} 

      onPress={() => router.push({
          // path to the ArticleScreen bc in same folder
          pathname: '/screens/SportsScreen',  
      })}>
      <Text style={styles.dailyIntro}>SPORTS</Text>
    </TouchableOpacity>

    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    height: "100%",
    justifyContent: "center",
    display: "flex",
 
  },
  dailyIntro:{
    fontFamily: "Playfair-Display",
    padding: 10,
    alignSelf: "center",
    color: "#FFFFFF",
  },
  categoryContainer:{
    backgroundColor: "#501e4c",
    padding: 10,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 20,
    width: 150,    
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
