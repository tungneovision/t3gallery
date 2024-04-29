import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/e1172092-c9b8-446c-a88c-d2bca3e89a6c-n55i0v.jpg",
  "https://utfs.io/f/cbab6109-3bd8-4d43-9d26-f98078f46c7a-pkxo3m.jpg",
  "https://utfs.io/f/6d039b3e-f3bd-4761-9ea1-93da1c66fe8a-9rx3tp._V1_FMjpg_UX1000_.jpg",
  "https://utfs.io/f/53d20bb6-11cc-45a3-b6db-27b67f609d17-nm33wo.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
