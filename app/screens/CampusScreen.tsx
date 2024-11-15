import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { SvgUri } from 'react-native-svg';
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import CampusArticles from '@/components/CampusArticles';
import { ScrollView } from 'react-native';

// this is the link to the Daily's GraphQL endpoint
// I've downloaded the WPGraphQL plugin on the SNO WP dashboard

const client = new ApolloClient({
  uri: "https://dailynorthwestern.com/graphql",   
  cache: new InMemoryCache(),
});

export default function CampusScreen() {

  return (
    // wrap in apolloprovider
    <ApolloProvider client={client}>
    <SafeAreaView style={styles.mainContainer}>

    <ScrollView>
   <CampusArticles/>

    </ScrollView>
    </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: "100%",
    width: "100%",

  },
  headerContainer:{
    top: 0,
    height: 80,
    width: "100%",
    color: "#501e4c",
    alignContent: "center",
    justifyContent:"center",
  
  },
  dailyLogo: {
    position:"absolute",
    color: '#FFFFF',
    resizeMode: 'contain',  
    alignSelf: "center",
  },
  latestTitle:{
    color: "#501e4c",
  },
  firstArticle:{
    height: "10%",
  }
});
