// 1. What is Next.js?

// Next.js is a React framework that provides functionality like server-side rendering (SSR), static site generation (SSG), and API routes, making it ideal for building fast, SEO-friendly React applications. It offers file-based routing, automatic code splitting, and supports both static and dynamic content rendering.
// Next.js makes building production-ready React apps easier, handling both front-end and back-end requirements with minimal configuration.




// 2. What are the differences between Static Site Generation (SSG), Server-Side Rendering (SSR), and Client-Side Rendering (CSR)?

// SSG (Static Site Generation) is when the HTML pages are generated at build time. The content is pre-rendered and served as static files, resulting in fast load times and improved SEO.
// SSR (Server-Side Rendering) happens at request time. The HTML is generated on the server and sent to the client, making it more suitable for real-time data.
// CSR (Client-Side Rendering) happens entirely in the browser where React is used to render content dynamically on the client after the page is loaded.

// Example of SSG with `getStaticProps` (Pre-render at build time):
export async function getStaticProps() {
    const data = await fetchData();
    return {
      props: { data },
    };
  }
  
  // Example of SSR with `getServerSideProps` (Pre-render at request time):
  export async function getServerSideProps() {
    const data = await fetchData();
    return {
      props: { data },
    };
  }
  
  // CSR happens directly in the browser after the initial HTML page load.
  
  
  
  
  // 3. What is `getStaticProps` and how is it used in Next.js?
  
  // `getStaticProps` is used for static site generation (SSG). It runs at build time to fetch data and pre-render a page as static HTML. It is ideal for content that does not change frequently and can be built ahead of time.
  
  export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
  
    return {
      props: { data },  // Passed to the page component as props
    };
  }
  
  export default function Page({ data }) {
    return (
      <div>
        <h1>Static Page with Data</h1>
        <p>{data}</p>
      </div>
    );
  }
  
  // SSG helps with better SEO and faster page load times since the page is pre-rendered at build time.
  
  
  
  
  
  // 4. What is `getServerSideProps` in Next.js?
  
  // `getServerSideProps` is used for server-side rendering (SSR). It fetches data on each request, meaning it generates the HTML server-side on every page load. This is suitable for dynamic pages that need to fetch real-time data before rendering.
  
  export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/user');
    const user = await res.json();
  
    return {
      props: { user },
    };
  }
  
  export default function UserProfile({ user }) {
    return (
      <div>
        <h1>Welcome, {user.name}</h1>
        <p>{user.email}</p>
      </div>
    );
  }
  
  // SSR is ideal for content that requires fresh data on each request (e.g., user-specific or time-sensitive data).
  
  
  
  
  // 5. How does Next.js handle routing?
  
  // Next.js uses a file-based routing system. Each file inside the `pages` directory automatically becomes a route. The file name corresponds to the route URL, making routing simple and intuitive.
  
  // Example:
  // - `pages/index.js` will be accessible at `/`
  // - `pages/about.js` will be accessible at `/about`
  // Dynamic routes are created using square brackets in the filename.
  // - `pages/post/[id].js` will be accessible at `/post/:id`
  
  export default function About() {
    return <h1>About Us</h1>;
  }
  
  
  
  
  // 6. What are dynamic routes in Next.js?
  
  // Dynamic routes allow you to create pages based on a dynamic segment in the URL. For example, to create a page for each blog post using an `id` in the URL, you would create a file like `pages/post/[id].js`.
  
  export async function getStaticPaths() {
    const res = await fetch('https://api.example.com/posts');
    const posts = await res.json();
  
    const paths = posts.map(post => ({
      params: { id: post.id.toString() },
    }));
  
    return {
      paths,
      fallback: false, // Show a 404 page if the path does not exist
    };
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://api.example.com/posts/${params.id}`);
    const post = await res.json();
  
    return {
      props: { post },
    };
  }
  
  export default function Post({ post }) {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
  
  // `getStaticPaths` generates the list of dynamic routes, and `getStaticProps` fetches data for each page at build time.
  
  
  
  
  // 7. What is API routes in Next.js?
  
  // API routes allow you to build backend functionality inside your Next.js application. These routes are stored in the `pages/api` directory. You can define a JavaScript or TypeScript file in `pages/api` to create an API endpoint.
  
  export default function handler(req, res) {
    res.status(200).json({ message: 'Hello, world!' });
  }
  
  // You can access the API route by making a request to `/api/handler`. API routes are great for integrating backend logic into your frontend app.
  
  
  
  
  // 8. How can you add CSS or styling in Next.js?
  
  // Next.js supports various ways of styling, including global styles, CSS modules, and styled-components:
  
  // - Global CSS: You can import global styles in the `_app.js` file.
  import '../styles/globals.css';
  
  // - CSS Modules: You can scope your styles to individual components by using CSS modules. Just name your CSS file with `.module.css` extension.
  import styles from './Component.module.css';
  
  // - Styled-components: You can use styled-components or other CSS-in-JS libraries for dynamic styling.
  import styled from 'styled-components';
  
  const Button = styled.button`
    background-color: blue;
    color: white;
  `;
  
  
  
  
  // 9. What is Incremental Static Regeneration (ISR)?
  
  // ISR allows you to update static content without rebuilding the entire site. With ISR, you can specify a `revalidate` time in `getStaticProps` to regenerate the page at a specified interval while keeping the initial static page.
  
  // Example of ISR:
  export async function getStaticProps() {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
  
    return {
      props: { data },
      revalidate: 10, // Rebuild the page every 10 seconds
    };
  }
  
  // ISR ensures that the page content is refreshed periodically while keeping the benefits of static rendering.
  
  
  
  
  
  // 10. What are the advantages of using Next.js over React?
  
  // - **SEO**: Next.js provides Server-Side Rendering (SSR) and Static Site Generation (SSG), which significantly improves SEO by ensuring search engines can crawl fully-rendered HTML.
  // - **Automatic code splitting**: Next.js automatically splits code into smaller bundles, reducing initial page load time.
  // - **File-based routing**: No need to configure a routing system. Next.js automatically maps the file structure to routes.
  // - **API routes**: You can build backend APIs directly in the Next.js app without needing a separate server.
  // - **Static generation with dynamic content**: Next.js allows you to generate static pages at build time (SSG) and also support dynamic data fetching with SSR.
  
  