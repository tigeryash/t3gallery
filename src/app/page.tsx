import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/3d34a4e7-deb0-457d-bfc4-0c584c0fec44-tumf9t.jpg",
  "https://utfs.io/f/a938dbfd-b82d-4a25-8b81-5f4819be14e1-z0r9s.jpg",
  "https://utfs.io/f/099e5db0-30d2-47a8-bd3c-d0783c0c1694-jlo1ag.jpg",
  "https://utfs.io/f/79d327ef-4620-4f49-abcc-dc05a043de38-mxkp3n.jpg",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.images.findMany();
  console.log(posts);
  return (
    <main className=" ">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, idx) => (
          <div key={image.id + "-" + idx} className="w-48 p-2">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
