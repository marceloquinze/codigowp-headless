import Image from "next/image";
import DateBox from "@/components/DateBox";
import { getPosts } from "@/lib/wp";
import Link from "next/link";
import PostMetaInfo from "@/components/PostMetaInfo";

export default async function Blog(){
	const data = await getPosts();
	const posts = data.posts.nodes;
	console.log(posts);

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
							<article key={post.slug} className="flex flex-col gap-8">
								<Image 
									src={post.featuredImage?.node.sourceUrl} 
									width={800} 
									height={400} 
									alt={post.title} 
									className="w-full"/>
								<div className="meta-data flex gap-8 items-center">
									<DateBox dateString={post.date} />
									<h2 className="font-semibold text-3xl">{post.title}</h2>
								</div>
								<PostMetaInfo 
									author={post.author} 
									categories={post.categories} 
									commentCount={post.commentCount} />
								<div className="excerpt text-gray-800 line-clamp-2 text-md leading-relaxed" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
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