import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { decode } from "html-entities";

import { useRouter } from 'expo-router';

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  slug: string;
  author?: {
    node?: {
      name?: string;
    };
  };
  featuredImage?: {
    node?: {
      sourceUrl?: string;
      altText?: string;
    };
  };
  link: string;
}

type ArticleScreenRouteProp = RouteProp<{ params: Post }, 'params'>;

const ArticleScreen: React.FC = () => {
  const route = useRoute<ArticleScreenRouteProp>();


     //! delete later... just for debugging
    console.log(route.params); 
    const post_data = route.params ? JSON.parse(route.params.post) : null;

     //! delete later... just for debugging
    console.log("Post data received in ArticleScreen:", post_data); 

    // helper functions to clean text... TODO: modularize into helper function
    function stripHTMLTags(text: string): string {
      // replace <br> with new line
      // text = text.replace(/<br\s*\/?>/gi, '\n');


      // Replace <p> and </p> with actual paragraph breaks (double newlines)
      text = text.replace(/<p\s*[^>]*>/gi, '\n');
      text = text.replace(/<\/p>/gi, '\n');
      return text.replace(/<[^>]*>/g, '');
    }

    // strip HTML tags 
    function cleanTextContent(text: string): string {
      let cleaned = decode(text);
      cleaned = stripHTMLTags(cleaned);
      return cleaned;
    }
    const cleanText = cleanTextContent(post_data.content);
  
    // split the text into paragraphs based on two newlines
    const paragraphs = cleanText.split('\n\n');
    
    return (
    <ScrollView style={styles.container}>
      {post_data?.featuredImage?.node?.sourceUrl && (
        <Image source={{ uri: post_data.featuredImage.node.sourceUrl }} style={styles.image} />
      )}
      
      {/* Title */}
      <Text style={styles.title}>{post_data.title}</Text>

      {/* Section */}
      <Text style={styles.author}> {post_data.author?.node?.name}</Text>

      {/* Date */}
      <Text style={styles.date}>{post_data.date}</Text>

      {/* Text */}
      <View>
        {paragraphs.map((paragraph, index) => (
          <Text key={index} style={styles.content}>
            {paragraph}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    fontFamily: "Playfair-Display",

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: "Playfair-Display-Bold",

  },
  author: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
    fontFamily: "Playfair-Display",

  },
  date: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 12,
    fontFamily: "Playfair-Display",

  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Playfair-Display",
    // this is for the paragraph spacing
    marginBottom: 4 

  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
});

export default ArticleScreen;
