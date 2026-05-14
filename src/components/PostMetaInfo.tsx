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
		<div className="flex items-center gap-8">
			<div className="flex flex-col justify-center gap-2">
				<span className="text-[10px] uppercase font-bold text-gray-800 leading-tight">Autor</span>
				<span className="font-medium uppercase text-gray-400">{authorName}</span>
			</div>
			<div className="flex flex-col justify-center gap-2">
				<span className="text-[10px] uppercase font-bold text-gray-800 leading-tight">Categorias</span>
				{ categories.map((category) => (
					<span className="font-medium uppercase text-gray-400" key={category.slug}>{category.name}</span>
				))}
			</div>
			<div className="flex flex-col justify-center gap-2">
				<span className="text-[10px] uppercase font-bold text-gray-800 leading-tight">Comentários</span>
				<span className="font-medium uppercase text-gray-400">
					{ commentCount || 0 } { commentCount === 1 ? 'comentário' : 'comentários'}
				</span>
			</div>
		</div>
	)
}