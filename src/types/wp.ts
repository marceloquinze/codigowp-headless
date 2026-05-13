export interface Curso {
	title: string;
	slug: string;
	codigowpCourseDuration: string;
	codigowpCourseLink: string;
	codigowpIsUdemy: boolean;
	codigowpNumStudents: number;
	codigowpSalePrice: string;
	codigowpRegularPrice: string;
}

export interface GetCoursosResponse {
	cursos: {
		nodes: Curso[];
	}
}