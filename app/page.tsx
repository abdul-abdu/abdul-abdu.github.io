import Title from "@components/Title";
import BlogPosts from "@components/posts";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Title>Posts</Title>
      <br />
      <BlogPosts />
    </div>
  );
}
