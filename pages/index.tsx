import Head from 'next/head';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Marc Hooftman - Personal Site</title>
        <meta name="description" content="Welcome to Marc Hooftman's personal website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Marc’s Personal Site</h1>
        <p>This is the homepage.</p>
      </main>
    </div>
  );
}

export default HomePage;
