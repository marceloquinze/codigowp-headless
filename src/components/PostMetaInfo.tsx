interface Category {
	name: string;
	slug: string;
}

interface PostMetaInfoProps {
	authorName: string;
	categories: Category[];
	commentCount: number | null;
}

export default function PostMetaInfo({authorName, categories, commentCount}: PostMetaInfoProps) {
	return (
		<div className="post-meta-info">
			<div className="box">
				<span className="title">Autor</span>
				<span className="description">{authorName}</span>
			</div>
			<div className="box">
				<span className="title">Categorias</span>
				{ categories.map((category) => (
					<span 
						className="description" 
						key={category.slug}>
						{category.name}
					</span>
				))}
			</div>
			<div className="box">
				<span className="title">Comentários</span>
				<span className="description">
					{ commentCount || 0 } { commentCount === 1 ? 'comentário' : 'comentários'}
				</span>
			</div>
		</div>
	)
}