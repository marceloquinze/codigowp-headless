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

export interface GetCursosResponse {
	cursos: {
		nodes: Curso[];
	}
}

// Menus

export interface MenuItem {
	label: string;
	uri: string;
}

export interface GetMenuResponse {
	menu: {
		menuItems: {
			nodes: MenuItem[];
		}
	}
}

// Posts

// export interface PostListItem {
// 	title: string;
// 	slug: string;
// 	excerpt: string;
// 	date: string;
// 	author: {
// 		node: {
// 			name: string;
// 		}
// 	};
// 	featuredImage?: {
// 		node: {
// 			sourceUrl: string;
// 		}
// 	};
// 	commentCount: number;
// 	categories: {
// 		nodes: {
// 			name: string;
// 			slug: string;
// 		}[]
// 	};
// }

// export interface GetPostResponse {
// 	posts: {
// 		nodes: PostListItem[];
// 	}
// }


// Posts 

export interface RawPostNode {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  commentCount: number | null;
  author?: {
    node: { name: string };
  };
  categories?: {
    nodes: { name: string; slug: string }[];
  };
  featuredImage?: {
    node: { sourceUrl: string };
  };
}

export interface RawGetPostsResponse {
  posts: {
    nodes: RawPostNode[];
  };
}

export interface CleanPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  commentCount: number;
  authorName: string;
  categories: { name: string; slug: string }[];
  featuredImage: string | null;
}