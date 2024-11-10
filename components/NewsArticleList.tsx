
import React from "react";
import { View, Text, Image, StyleSheet, Linking, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { decode } from "html-entities";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const GET_FRONT_PAGE_POSTS = gql`
  query GetFrontPagePosts {
    category(id: "Latest Stories", idType: NAME) {
      posts {
        nodes {
          id
          title
          content
          excerpt
          date
          slug
          author {
            node {
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          link
        }
      }
    }
  }
`;

function stripHTMLTags(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

function cleanTextContent(text: string): string {
  let cleaned = decode(text);
  cleaned = stripHTMLTags(cleaned);
  return cleaned;
}

type RootStackParamList = {
  'Full Article': { post: any };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Full Article'>;

const NewsArticleList: React.FC = () => {
  const { data, loading, error } = useQuery(GET_FRONT_PAGE_POSTS);
  const navigation = useNavigation();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const posts = data?.category?.posts?.nodes || [];

  
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <TouchableOpacity
              key={post.id}
             
              onPress={() => {
                console.log("Navigating to Full Article with post:", post);
                navigation.navigate('Article Screen', { post });
              }}
              
              style={styles.articleContainer}
            >
              {post.featuredImage?.node?.sourceUrl && (
                <Image
                  source={{ uri: post.featuredImage.node.sourceUrl }}
                  style={styles.image}
                />
              )}
              <Text style={styles.title}>{cleanTextContent(post.title)}</Text>
              <Text style={styles.author}>By {post.author?.node?.name || "Unknown Author"}</Text>
              <Text style={styles.date}>{post.date}</Text>
              <Text style={styles.excerpt}>{cleanTextContent(post.excerpt)}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No articles found</Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignSelf: "center",
    width: "90%",
  },
  articleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    color: "gray",
    marginBottom: 12,
  },
  date: {
    fontSize: 16,
    color: "gray",
    marginBottom: 12,
  },
  excerpt: {
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    resizeMode: "contain",
  },
});

export default NewsArticleList;
