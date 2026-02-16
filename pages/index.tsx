import Head from 'next/head';
import { Avatar } from 'next-auth/react';
import { BlogPost } from '../components/BlogPost';

function Header() {
  return (
    <header>
      <h1>Marc Hooftman</h1>
      <Avatar src="/marc-avatar.jpg" alt="Marc Hooftman" />
    </header>
  );
}

function BlogFeed() {
  return (
    <section className="blog-feed">
      <h2>Latest Posts</h2>
      <BlogPost />
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Marc Hooftman</p>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>Marc Hooftman - Personal Site</title>
        <meta name="description" content="Welcome to Marc Hooftman's personal website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <BlogFeed />
        <Footer />
      </main>
    </div>
  );
}
