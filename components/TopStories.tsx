
import React from "react";
import { View, Text, Image, StyleSheet, Linking, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { decode } from "html-entities";
// import { useNavigation } from "@react-navigation/native";
import {Link, useNavigation, useRouter} from "expo-router";
import ArticleScreen from "@/app/screens/ArticleScreen";

const GET_TOP_STORIES = gql`
  query GetFrontPagePosts {
    category(id: "Top Stories", idType: NAME) {
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

    // replace <br> with new line
    text = text.replace(/<br\s*\/?>/gi, '\n');
    return text.replace(/<[^>]*>/g, '');
}

function cleanTextContent(text: string): string {
    let cleaned = decode(text);
    cleaned = stripHTMLTags(cleaned);
    return cleaned;
}

const TopStories: React.FC = () => {
    const { data, loading, error } = useQuery( GET_TOP_STORIES);
    //   const navigation = useNavigation();

    const router = useRouter();
    const navigation = useNavigation();


    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    const posts = data?.category?.posts?.nodes || [];

    return (
        <View>
            <Text> TOP STORIES</Text>
            {posts.length > 0 ? (
            posts.map((post: any) => (
                <TouchableOpacity
                key={post.id}
                onPress={() => router.push({
                    // path to the ArticleScreen bc in same folder
                    pathname: '/screens/ArticleScreen',  

                    // pass the post data as query params
                    params: { post: JSON.stringify(post) },  
                })}
                style={styles.articleContainer}
            >
                {post.featuredImage?.node?.sourceUrl && (
                <Image
                    source={{ uri: post.featuredImage.node.sourceUrl }}
                    style={styles.image}
                />
                )}

                {/* Article Title */}
                <Text style={styles.title}>{cleanTextContent(post.title)}</Text>
                
                {/* //TODO: find way to actually get author -- RSS feed? on WP side? */}
                {/* Article Section */}
                <Text style={styles.author}>{post.author?.node?.name || "Unknown Author"}</Text>

                {/* Article Date */}
                <Text style={styles.date}>{post.date}</Text>

                {/* Article Excerpt */}
                <Text style={styles.excerpt}>{cleanTextContent(post.excerpt)}</Text>
                </TouchableOpacity>
            ))
            ) : (
            <Text>No articles found</Text>
            )}
            </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignSelf: "center",
    width: "90%",
    fontFamily: "Playfair-Display",
  },
  articleContainer: {
    marginBottom: 20,
    fontFamily: "Playfair-Display",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "Playfair-Display-Bold",
  },
  author: {
    fontSize: 16,
    color: "gray",
    marginBottom: 12,
    fontFamily: "Playfair-Display",
  },
  date: {
    fontSize: 16,
    color: "gray",
    marginBottom: 12,
    fontFamily: "Playfair-Display",
  },
  excerpt: {
    fontSize: 16,
    marginBottom: 16,
    fontFamily: "Playfair-Display",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    resizeMode: "contain",
    
  },
});

export default TopStories;
