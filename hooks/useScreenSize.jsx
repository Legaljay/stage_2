import React, { useEffect, useState } from 'react'

const useScreenSize = () => {
    const [mobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          const isMobileDevice = window.innerWidth <= 768;
          setIsMobile(isMobileDevice);
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
  return { mobile, setIsMobile }
}

export default useScreenSize