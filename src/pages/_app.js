import { useRouter } from 'next/router';
import '../app/globals.css';

// Standard Next.js App component with global styles
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
