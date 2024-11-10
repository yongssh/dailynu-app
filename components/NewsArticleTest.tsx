import React from "react";
import { View, Text, Image, StyleSheet, Linking, SafeAreaView, TouchableOpacity } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { decode } from "html-entities"; 
import { useFonts } from "expo-font";

const GET_FIRST_POST = gql`
  query {
    posts(first: 1) {
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
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        link
      }
    }
  }
`;

// helper function to remove HTML tags bc returned content contains html tags
function stripHTMLTags(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

// helper function to decode HTML entities
function cleanTextContent(text: string): string {
  let cleaned = decode(text); 
  cleaned = stripHTMLTags(cleaned);
  return cleaned;
}

// extract the author from HTML content ??? i can't get it from the GraphQL query
function extractAuthorFromContent(content: string): string {

const regex = /<a [^>]*class=["'][^"']*creditline[^"']*["'][^>]*>([^<]+)<\/a>/;
console.log(content); 

const match = content.match(regex);
  return match ? match[1] : ''; 
}

const NewsArticle: React.FC = () => {
  const { data, loading, error } = useQuery(GET_FIRST_POST);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const post = data?.posts?.nodes[0];

  return (
    <SafeAreaView style={styles.container}>
      {post ? (
        
        // whole "card" links to actual article
        <TouchableOpacity onPress={() => Linking.openURL(post.link)}>
        
        {/* Article Image */}
          <Image
            source={{ uri: post?.featuredImage?.node?.sourceUrl }}
            style={styles.image}
          />
          {/* Article Title */}
          <Text style={styles.title}>{cleanTextContent(post.title)}</Text>

          {/* Article Author - extracted from HTML content??? or from graphQL */}
          {/* <Text style={styles.author}>
            
            By {extractAuthorFromContent(post.content)}
          </Text> */}
          <Text style={styles.date}>
            {post.date}
          </Text>

          {/* Article Excerpt */}
          <Text style={styles.excerpt}>{cleanTextContent(post.excerpt)}</Text>

       

          {/* Link to full article */}
        </TouchableOpacity>
      ) : (
        <Text>No articles found</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignSelf: "center",
    width: "90%",
    height: "10%"

  
  },
  title: {
    fontFamily:"PlayfairDisplayBold",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  author: {
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    color: "gray",
    marginBottom: 12,
  },
  date: {
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    color: "gray",
    marginBottom: 12,
  },
  excerpt: {
    fontFamily: "PlayfairDisplay",
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    resizeMode: "contain",
  },
  link: {
    fontSize: 16,
    color: "blue",
    fontFamily: "Playfair Display ",
  },
  customText: {
    color: 'black',
    fontSize: 30,
    fontFamily: "Playfair Display",
  },
});

export default NewsArticle;
