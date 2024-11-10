
import React from "react";
import { View, Text, Image, StyleSheet, Linking, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { decode } from "html-entities";
// import { useNavigation } from "@react-navigation/native";
import {Link, useNavigation, useRouter} from "expo-router";
import ArticleScreen from "@/app/screens/ArticleScreen";


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

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

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

const NewsArticleList: React.FC = () => {
    const { data, loading, error } = useQuery(GET_FRONT_PAGE_POSTS);
    //   const navigation = useNavigation();

    const router = useRouter();
    const navigation = useNavigation();


    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    const posts = data?.category?.posts?.nodes || [];

    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> LATEST STORIES</Text>
                </View> 
            <View style={styles.container}>
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
                {/* <Text style={styles.author}>{post.author?.node?.name || "Unknown Author"}</Text> */}

                {/* Article Date */}
                <Text style={styles.date}>{formatDate(post.date)}</Text>

                {/* Article Excerpt */}
                <Text style={styles.excerpt}>{cleanTextContent(post.excerpt)}</Text>
                </TouchableOpacity>
            ))
            ) : (
            <Text>No articles found</Text>
            )}
        </View>
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

  titleContainer:{
    shadowColor: "FAFAFA",
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "#501e4c",
    justifyContent: "center",
    margin: 10,
    position: "relative",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    fontFamily: "Playfair-Display-Bold",
    justifyContent: "center",
    alignSelf: "center",
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

export default NewsArticleList;
