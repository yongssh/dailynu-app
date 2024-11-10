import React from "react";
import { View, Text, Image, StyleSheet, ScrollView , SafeAreaView} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";


const ArticleScreen: React.FC<{ route: any }> = ({ route }) => {
  const { post } = route.params; // Access the post passed as a parameter
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{post.title}</Text>
        <Image source={{ uri: post.featuredImage?.node?.sourceUrl }} style={{ width: '100%', height: 200 }} />
        <Text>{post.excerpt}</Text>
        {/* Display other article content */}
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginTop: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    resizeMode: "contain",
  },
});

export default ArticleScreen;
