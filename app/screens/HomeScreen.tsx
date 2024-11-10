import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../App.tsx"; 
import { decode } from "html-entities";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const GET_FRONT_PAGE_POSTS = gql`
  query GetFrontPagePosts {
    category(id: "Latest Stories", idType: NAME) {
      posts {
        nodes {
          id
          title
          excerpt
          date
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          content
        }
      }
    }
  }
`;

function stripHTMLTags(text: string): string {
  return text.replace(/<[^>]*>/g, "");
}


type RootStackParamList = {
  HomeScreen: undefined;
  ArticleScreen: { post: any };
};

const HomeScreen: React.FC = () => {
  const { data, loading, error } = useQuery(GET_FRONT_PAGE_POSTS);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const posts = data?.category?.posts?.nodes || [];

  return (
    <ScrollView>
      <View style={styles.container}>
       <Text>Welcome to the Home Screen</Text>;

        {posts.map((post: any) => (
          <TouchableOpacity
            key={post.id}
            style={styles.articleContainer}
            onPress={() => navigation.navigate("ArticleScreen", { post })}
          >
            {post.featuredImage?.node?.sourceUrl && (
              <Image
                source={{ uri: post.featuredImage.node.sourceUrl }}
                style={styles.image}
              />
            )}
            <Text style={styles.title}>{stripHTMLTags(decode(post.title))}</Text>
            <Text style={styles.author}>By {post.author?.node?.name || "Unknown Author"}</Text>
            <Text style={styles.date}>{post.date}</Text>
            <Text style={styles.excerpt}>{stripHTMLTags(decode(post.excerpt))}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  articleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: "gray",
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: "gray",
    marginBottom: 8,
  },
  excerpt: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    resizeMode: "cover",
  },
});

export default HomeScreen;
