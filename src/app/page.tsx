"use client";
import Image from "next/image";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function products() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=products`,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const blogs = await products();

  return (
    <div className="bg-gray-700 grid grid-cols-4 p-5 gap-5">
      {blogs.items.map((blog: any) => (
        <div className="bg-white p-5" key={blog.sys.id}>
          {blogs.includes.Asset.map((elem: any) => (
            <div key={blog.fields.image.sys.id}>
              {blog.fields.image.sys.id == elem.sys.id ? (
                <Image
                  src={"https:" + elem.fields.file.url}
                  alt="Shirt One"
                  width={500}
                  height={500}
                  className="h-64"
                />
              ) : (
                <div></div>
              )}
            </div>
          ))}

          <h1 className="text-3xl font-semibold pt-2">{blog.fields.title}</h1>
          <p className="text-md">
            {documentToReactComponents(blog.fields.description)}
          </p>
          <h2 className="font-bold pt-2 text-lg">{blog.fields.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
