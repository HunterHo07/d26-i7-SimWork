// This script helps with GitHub Pages routing for Next.js apps
(function() {
  // Only run this script on GitHub Pages
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    console.log('Running GitHub Pages router helper');
    
    // Check if we need to redirect based on the URL pattern
    const path = window.location.pathname;
    const repoName = 'd26-i7-SimWork';
    
    // If we're at the root of the repo but not at the basePath
    if (path === `/${repoName}` || path === `/${repoName}/`) {
      console.log('At repo root, no redirect needed');
      return;
    }
    
    // If we're at a subpath that doesn't include the repo name
    if (!path.startsWith(`/${repoName}/`) && path !== '/') {
      console.log('Redirecting to include repo name in path');
      window.location.href = `/${repoName}${path}`;
    }
    
    // Handle 404 redirects from the query string (from 404.html)
    const location = window.location;
    if (location.search.includes('?/')) {
      const redirectPath = location.search.substring(2);
      console.log(`Redirecting from 404 to: ${redirectPath}`);
      window.history.replaceState(null, null, `/${repoName}/${redirectPath}`);
    }
  }
})();
