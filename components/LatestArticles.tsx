import React from "react";
import { View, Text, Image, StyleSheet, Linking, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { decode } from "html-entities";

const GET_CATEGORY_POSTS = gql`
  query GetCategoryPosts {
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
  }
`;

// remove HTML tags
function stripHTMLTags(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

// decode HTML entities
function cleanTextContent(text: string): string {
  let cleaned = decode(text); 
  cleaned = stripHTMLTags(cleaned);
  return cleaned;
}

const LatestArticle: React.FC = () => {
  const { data, loading, error } = useQuery(GET_CATEGORY_POSTS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const posts = data?.category?.posts?.nodes || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <TouchableOpacity key={post.id} style={styles.card} onPress={() => Linking.openURL(post.link)}>
              {/* Article Image */}
              {post?.featuredImage?.node?.sourceUrl && (
                <Image
                  source={{ uri: post.featuredImage.node.sourceUrl }}
                  style={styles.image}
                />
              )}
              {/* Article Title */}
              <Text style={styles.title}>{cleanTextContent(post.title)}</Text>

              {/* Article Author */}
              {post.author?.node?.name && (
                <Text style={styles.author}>By {post.author.node.name}</Text>
              )}
              <Text style={styles.date}>{post.date}</Text>

              {/* Article Excerpt */}
              <Text style={styles.excerpt}>{cleanTextContent(post.excerpt)}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No articles found</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignSelf: "center",
    width: "90%",
  },
  card: {
    marginBottom: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    color: "gray",
    marginBottom: 4,
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

export default LatestArticle;
