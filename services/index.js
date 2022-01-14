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

}