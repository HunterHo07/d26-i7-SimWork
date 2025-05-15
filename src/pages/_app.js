import { useEffect } from 'react';
import { useRouter } from 'next/router';

// This component handles GitHub Pages path issues
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Handle GitHub Pages SPA routing
    const handleRouteChange = (url) => {
      // Log route changes for debugging
      console.log(`App is navigating to: ${url}`);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    
    // Clean up the event listener
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
