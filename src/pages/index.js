import { useEffect } from 'react';
import { useRouter } from 'next/router';

// This is a simple redirect component that will redirect to the app directory
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the app directory homepage
    router.push('/');
  }, [router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h1>Loading SimWork...</h1>
      <p>Please wait while we redirect you to the homepage.</p>
    </div>
  );
}
