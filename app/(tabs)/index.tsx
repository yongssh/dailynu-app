// import React from 'react';
// import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
// import { SvgUri } from 'react-native-svg';
// import App from '../App';
// import NewsArticle from '@/components/NewsArticleTest';
// import NewsArticleList from '@/components/NewsArticleList';
// import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
// import LatestArticle from '@/components/LatestArticles';
// const client = new ApolloClient({
//   uri: "https://dailynorthwestern.com/graphql",   
//   cache: new InMemoryCache(),
// });

// export default function HomeScreen() {

//   return (
//     <ApolloProvider client={client}>
//       <App/>
//     {/* <SafeAreaView style={styles.mainContainer}>
//     <View style={styles.headerContainer}>
//       <SvgUri
//           width="80%"
//           height="100%"
//           fill="#501e4c"
//           style={styles.dailyLogo}
//           uri="https://dailynorthwestern.com/wp-content/uploads/2022/09/desktop-outlines2.svg"
//       />
//     </View>
//     <Text style={styles.latestTitle}>Latest</Text>
//     <NewsArticle/>
//   < NewsArticleList/>
//   <LatestArticle/> 
//     </SafeAreaView>*/}
//     </ApolloProvider>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     height: "100%",
//     width: "100%",

//   },
//   headerContainer:{
//     top: 0,
//     height: 80,
//     width: "100%",
  
//     alignContent: "center",
//     justifyContent:"center",
  
//   },
//   dailyLogo: {
//     position:"absolute",
//     color: '#FFFFF',
//     resizeMode: 'contain',  
//     alignSelf: "center",
//   },
//   latestTitle:{
//     color: "#501e4c",
//   },
//   firstArticle:{
//     height: "10%",
//   }
// });

import { registerRootComponent } from "expo";
import App from "../App";

// Ensures that the app runs properly on both Expo and bare React Native projects
registerRootComponent(App);

