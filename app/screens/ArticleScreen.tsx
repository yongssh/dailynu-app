import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../App"; 
import { decode } from "html-entities";

type ArticleScreenRouteProp = RouteProp<RootStackParamList, "ArticleScreen">;

const ArticleScreen: React.FC = () => {
  const route = useRoute<ArticleScreenRouteProp>();
  const { post } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {post.featuredImage?.node?.sourceUrl && (
        <Image
          source={{ uri: post.featuredImage.node.sourceUrl }}
          style={styles.image}
        />
      )}
      <Text style={styles.title}>{decode(post.title)}</Text>
      <Text style={styles.author}>By {post.author?.node?.name || "Unknown Author"}</Text>
      <Text style={styles.date}>{post.date}</Text>
      <Text style={styles.content}>{decode(post.content)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 250,
    marginBottom: 10,
    resizeMode: "cover",
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
    fontSize: 14,
    color: "gray",
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ArticleScreen;
