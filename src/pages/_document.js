import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  // Determine the base path based on environment
  const basePath = process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '';

  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="SimWork is an AI-driven immersive work simulation platform that revolutionizes how people learn, practice, and demonstrate professional skills." />
        <meta name="keywords" content="work simulation, AI training, skill development, hiring assessment, immersive learning" />
        <link rel="icon" href={`${basePath}/favicon.ico`} />
        {/* Add base tag for GitHub Pages */}
        {process.env.NODE_ENV === 'production' && (
          <base href="/d26-i7-SimWork/" />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
