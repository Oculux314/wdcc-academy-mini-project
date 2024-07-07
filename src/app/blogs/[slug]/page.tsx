import { Blog } from "@/types/Blog";

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`http://localhost:3000/api/blogs/${params.slug}`);
  const blogs = (await res.json()) as Blog;

  return (
    <main>
      <h1>{blogs.title}</h1>
      <p>{blogs.content}</p>
    </main>
  );
}
