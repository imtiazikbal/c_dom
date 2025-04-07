export const pageview = () => {
  if (window && window.fbq) {
    window.fbq('track', 'PageView');
  } else {
    console.error('Facebook Pixel not initialized');
  }
}

export const event = (name, options = {}) => {
  if (window && window.fbq) {
    window.fbq('track', name, options);
  } else {
    console.error('Facebook Pixel not initialized');
  }
}
