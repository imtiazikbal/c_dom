import { useState } from 'react';

const useHover = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleHover = (itemId, isHovered) => {
    setHoveredItemId(isHovered ? itemId : null);
  };

  return { hoveredItemId, handleHover };
};

export default useHover;

