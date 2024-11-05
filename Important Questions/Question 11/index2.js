// Problem Statement:
// Developers working with Next.js need to understand the different rendering options available
// to optimize their applications for SEO, performance, and user experience. This documentation
// outlines the four primary rendering methods in Next.js, along with examples for each.

// All Four Types of Rendering in Next.js

// 1. Static Generation (SG)
// Static Generation (SG) is a rendering method where HTML is generated at build time.
// This means that the same HTML is served on each request, which makes it extremely fast and efficient.
// Use Case: Best suited for pages that can be pre-rendered and do not require frequent updates,
// such as landing pages, blogs, or documentation.

// Example:

const Blog = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return {
    props: { posts }, // Pass data to the page component as props
  };
};

export default Blog;

// In this example, the blog posts are fetched during the build process, and a static page is generated.
// This page can be served to all users, resulting in faster load times and better performance.

// 2. Server-Side Rendering (SSR)
// Server-Side Rendering (SSR) generates the HTML on each request.
// The server fetches data and renders the page before sending it to the client.
// Use Case: Ideal for pages that need to show fresh data for every request,
// such as user profiles, dashboards, or e-commerce product pages.

// Example:

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://api.example.com/users/${id}`);
  const user = await res.json();

  return {
    props: { user }, // Pass user data to the page component as props
  };
};

// In this example, user data is fetched on each request. This ensures that the user sees the most up-to-date information,
// which is essential for dynamic applications where data changes frequently.

// 3. Client-Side Rendering (CSR)
// Client-Side Rendering (CSR) means that the page's content is generated in the browser using JavaScript.
// The initial page load may be fast, but data fetching occurs after the page has been rendered.
// Use Case: Suitable for applications where SEO is less critical or for pages that require user interaction.

// Example:

import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://api.example.com/products");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

// This example demonstrates fetching product data on the client side after the component has mounted.
// While this approach allows for interactive applications, it may lead to slower initial render times since the content
// is not available until the data is fetched.

// 4. Incremental Static Regeneration (ISR)
// Incremental Static Regeneration (ISR) allows you to update static content after the site has been built.
// It enables you to create or update static pages in the background while serving the stale content to users.
// Use Case: Useful for pages that can be statically generated but need to reflect changes over time,
// such as news articles, blog posts, or product listings.

// Example:

const Articles = ({ articles }) => {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://api.example.com/articles");
  const articles = await res.json();

  return {
    props: { articles }, // Pass articles data to the page component as props
    revalidate: 60, // Revalidate the page every 60 seconds
  };
};

// In this example, the articles are fetched at build time, and the page is generated.
// However, after the initial build, Next.js will regenerate the page at most once every 60 seconds if there are requests,
// allowing for content updates without requiring a full rebuild of the site.

// Conclusion:
// Next.js provides four rendering methods: Static Generation for optimized pre-rendering,
// Server-Side Rendering for dynamic content, Client-Side Rendering for interactive experiences,
// and Incremental Static Regeneration for updating static content over time.
// Selecting the appropriate rendering method based on your application’s requirements is crucial for optimizing
// performance and enhancing user experience.
