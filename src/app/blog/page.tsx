import Image from "next/image";
import parse from 'html-react-parser';

import DateBox from "@/components/DateBox";
import { getPosts } from "@/lib/wp";
import Link from "next/link";
import PostMetaInfo from "@/components/PostMetaInfo";

export default async function Blog(){
	const posts = await getPosts();
	// const posts = data.posts.nodes;
	// console.log(posts);

	return (
		<main className="max-w-6xl mx-auto blog">
			<h1>Blog</h1>
			<div className="flex gap-8">
				<div className="w-3/4 flex flex-col gap-16">
					{posts.map((post) => (
						<Link
							href={`/blog/${post.slug}`}
							key={post.slug}
							className="hover:no-underline"
						>
							<article key={post.slug} className="flex flex-col gap-8 group">
								{post.featuredImage && (
									<div className="relative w-full h-96 mb-4 overflow-hidden rounded-xl">
										<Image 
											src={post.featuredImage} 
											alt={post.title} 
											fill
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            								priority={true}
											className="object-cover"/>
									</div>
								)}
								<div className="meta-data flex gap-8 items-center">
									<DateBox dateString={post.date} />
									<h2 className="font-semibold text-3xl">{post.title}</h2>
								</div>
								<PostMetaInfo 
									authorName={post.authorName} 
									categories={post.categories} 
									commentCount={post.commentCount} />
								<div className="excerpt text-gray-800 line-clamp-2 text-md leading-relaxed">{parse(post.excerpt)}</div>
							</article>
						</Link>
					))}
				</div>
				<div className="w-1/4">
					Sidebar
				</div>
			</div>
		</main>
	)
}