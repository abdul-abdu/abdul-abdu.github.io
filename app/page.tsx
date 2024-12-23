import Title from "@components/Title";
import { getBlogPosts } from "./utils";

export default function Page() {
  const allBlogs = getBlogPosts();
  return (
    <div className="min-h-screen max-w-7xl">
      <Title>Home</Title>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {allBlogs.map((blog) => (
          <section key={blog.slug}>
            <Title>{blog.metadata.title}</Title>
          </section>
        ))}
      </div>
    </div>
  );
}
