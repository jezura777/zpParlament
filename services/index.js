import { graphql } from 'graphql';
import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async () => {

    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        
                        createdAt
                        slug
                        title
                        excerpt
                        likes
                        featuredImage {
                            url
                        }
                        categories {
                            name
                            slug
                        }
                        author {
                            bio
                            name
                            id
                            photo {
                                url
                            }
                        }
                    }
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;

};

export const getRecentPosts = async () => {

    const query = gql`
    
        query GetPostsDetails() {

            posts(
            
                orderBy: createdAt_ASC
                last: 3

            ) {
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }

        }

    `
    const result = await request(graphqlAPI, query);

    return result.posts;

};

export const getSimilarPosts = async () => {

    const query = `
    
        query GetPostDetails($slug: String!, $categories: [String!]) {

            posts(
                where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories} }
                last: 3
            ){
                title
                featuredImage {
                    url
                }
                createdAt
                slug
            }

        }

    `
    const result = await request(graphqlAPI, query);

    return result.posts;

};

export const getCategories = async () => {

    const query = gql`
    
        query getCategories {

            categories {
                name
                slug
            }

        }

    `

    const result = await request(graphqlAPI, query);

    return result.categories;

}