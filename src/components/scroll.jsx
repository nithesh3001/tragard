import { useLocation } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';

const ScrollRestorationWrapper = ({ children }) => {
  const { pathname } = useLocation();
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    setReady(false); // Reset before scroll
    window.scrollTo(0, 0); // Scroll to top

    // Wait until next animation frame to ensure scroll is fully applied
    requestAnimationFrame(() => {
      setReady(true);
    });
  }, [pathname]);

  if (!ready) return null;

  return children;
};

export default ScrollRestorationWrapper;
