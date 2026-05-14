import { GraphQLClient, gql } from 'graphql-request';
import { GetCursosResponse, GetMenuResponse, GetPostResponse } from '@/types/wp';

const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string;

// the main site's engine
export const wpClient = new GraphQLClient(endpoint);

// Get one by one and give specific data only to the requesting component
// Helps handling cache

// Get only courses data
export async function getCursos(): Promise<GetCursosResponse> {
	const query = gql`
		query GetCursosComMeta {
			cursos {
				nodes {
					title
					slug
					codigowpCourseDuration
					codigowpCourseLink
					codigowpCourseId
					codigowpCourseLevel
					codigowpIsUdemy
					codigowpNewCourse
					codigowpNumStudents
					codigowpRegularPrice
					codigowpSalePrice
				}
			}
		}
	`;

	return await wpClient.request<GetCursosResponse>(query);
}

// Get only menu data
export async function getMenu(slug: string): Promise<GetMenuResponse> {
	const query = gql`
		query GetMenuBySlug($id: ID!) {
			menu(id: $id, idType: SLUG) {
				menuItems {
					nodes {
						label
						uri
					}
				}
			}
		}
	`;

	return await wpClient.request<GetMenuResponse>(query, { id: slug });
}

// Get all posts (for Blog page)
export async function getPosts(): Promise<GetPostResponse> {
	const query = gql`
		query GetPosts {
			posts {
				nodes {
					title
					slug
					excerpt
					date
					commentCount
					categories {
						nodes { name slug }
					}
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
				}
			}
		}
	`;

	return await wpClient.request(query);
}

// Get posts by slug
export async function getPostsBySlug(slug: string): Promise<GetPostResponse> {
	const query = gql`
		query GetPostBySlug($id: ID!) {
			post(id: $id, idType: SLUG) {
				title
				content
				slug
				commentCount
				author {
					node {
						name
						description
						avatar {
							url
						}
					}
				}
				categories {
					nodes {
						name
					}
				}
			}
		}	
	`;

	return await wpClient.request<GetPostResponse>(query, { id: slug });
}