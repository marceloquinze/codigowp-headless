import Image from "next/image";
import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

import DateBox from "@/components/DateBox";
import { getPosts } from "@/lib/wp";
import Link from "next/link";
import PostMetaInfo from "@/components/PostMetaInfo";

export default async function Blog(){
	const posts = await getPosts();
	// const posts = data.posts.nodes;
	console.log(posts);

	return (
		<main className="max-w-6xl mx-auto blog">
			<h1>Blog</h1>
			<div className="flex gap-8">
				<div className="w-3/4 flex flex-col gap-16">
					{posts.map((post) => (

							<article key={post.slug} className="flex flex-col gap-8 group">
								<Link
									href={`/blog/${post.slug}`}
									key={post.slug}
									className="hover:no-underline"
								>								
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
								</Link>
								<div className="meta-data flex gap-16 items-center">
									<DateBox dateString={post.date} />
										<Link
											href={`/blog/${post.slug}`}
											key={post.slug}
											className="hover:no-underline"
										>									
											<h2 className="transition delay-150 duration-300 ease-in-out font-semibold text-3xl hover:text-lime-600">{post.title}</h2>
										</Link>
								</div>
								<PostMetaInfo 
									authorName={post.authorName} 
									categories={post.categories} 
									commentCount={post.commentCount} />
								<div className="excerpt text-gray-700 transition delay-150 duration-300 ease-in-out line-clamp-2 text-md leading-relaxed">{parse(DOMPurify.sanitize(post.excerpt))}</div>
							</article>
						))}
				</div>
				<div className="w-1/4">
					Sidebar
				</div>
			</div>
		</main>
	)
}