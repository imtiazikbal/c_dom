export const adjustColorBrightness = (color, factor) => {
    // Assuming color is in the format '#RRGGBB'
    const hex = color.slice(1);
    const num = parseInt(hex, 16);
  
    // Calculate darker color
    const adjustedColor = '#' + (0x000000 | (num & 0xFFFFFF) * factor).toString(16).substr(1);
  
    return adjustedColor;
  };
