export default function Blog({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Blog</h1>
      <p>/blogs/{params.slug}</p>
    </div>
  );
}
