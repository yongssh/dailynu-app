import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { SvgUri } from 'react-native-svg';
// import NewsArticle from '@/components/NewsArticleTest';
import NewsArticleList from '@/components/LatestArticles';
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import TopStories from '@/components/TopStories';
import { ScrollView } from 'react-native';

// this is the link to the Daily's GraphQL endpoint
// I've downloaded the WPGraphQL plugin on the SNO WP dashboard

const client = new ApolloClient({
  uri: "https://dailynorthwestern.com/graphql",   
  cache: new InMemoryCache(),
});

export default function HomeScreen() {

  return (
    // wrap in apolloprovider
    <ApolloProvider client={client}>
    <SafeAreaView style={styles.mainContainer}>
      
      <View style={styles.headerContainer}>
        <SvgUri
            width="80%"
            height="100%"
            fill="#501e4c"
            style={styles.dailyLogo}
            uri="https://dailynorthwestern.com/wp-content/uploads/2022/09/desktop-outlines2.svg"
        />
      </View>
    <ScrollView>
    <TopStories/>
    < NewsArticleList/>

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
