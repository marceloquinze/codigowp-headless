import { GraphQLClient, gql } from 'graphql-request';
import { GetCoursosResponse } from '@/types/wp';

const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string;

export const wpClient = new GraphQLClient(endpoint);

// Função utilitária para rodar queries
export async function getCursos(): Promise<GetCoursosResponse> {
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

	return await wpClient.request<GetCoursosResponse>(query);
}