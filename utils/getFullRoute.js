export const getFullRoute = () => {
    // Check if window is defined (to ensure it's not server-side rendering)
    if (typeof window !== 'undefined') {
      // Use window.location.href to get the full route
      const fullRoute = window.location.href;
      return fullRoute;
    }
    return null;
  };