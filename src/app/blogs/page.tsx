import { Blog } from "@/types/Blog";

export default async function BlogsPage() {
  return null;
  const res = await fetch("http://localhost:3000/api/blogs");
  const blogs = (await res.json()) as Blog[];

  return (
    <main>
      <h1>Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li className="list-disc ml-10" key={blog.slug}>
            <a href={`/blogs/${blog.slug}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
