import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { decode } from 'html-entities';

 function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

 function stripHTMLTags(text: string): string {
   text = text.replace(/<br\s*\/?>/gi, '\n');
  return text.replace(/<[^>]*>/g, '');
}

 function cleanTextContent(text: string): string {
  let cleaned = decode(text);
  cleaned = stripHTMLTags(cleaned);
  return cleaned;
}

 const ArticleCard: React.FC<{ post: any }> = ({ post }) => {
  const router = useRouter();

   const handlePress = () => {
    router.push({
      pathname: '/screens/ArticleScreen',  
      params: { post: JSON.stringify(post) },  
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      {post.featuredImage?.node?.sourceUrl && (
        <Image
          source={{ uri: post.featuredImage.node.sourceUrl }}
          style={styles.image}
        />
      )}
      <Text style={styles.title}>{cleanTextContent(post.title)}</Text>
      <Text style={styles.date}>{formatDate(post.date)}</Text>
      <Text style={styles.excerpt}>{cleanTextContent(post.excerpt)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
    width: 325,
    marginHorizontal: 8,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#501e4c',
    fontFamily: "Playfair-Display-Bold",

  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
    fontFamily: "Playfair-Display",

  },
  excerpt: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
    lineHeight: 22,
    fontFamily: "Playfair-Display",

  },
});

export default ArticleCard;
