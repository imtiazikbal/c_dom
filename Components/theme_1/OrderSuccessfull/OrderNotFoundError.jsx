import Link from 'next/link';
import React from 'react';

const OrderNotFoundError = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensure full viewport height
    backgroundColor: '#f5f5f5',
    padding: '20px',
  };

  const messageStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyle}>
      <h2 style={messageStyle}>The requested order could not be found.</h2>
      <p>We apologize for the inconvenience. Perhaps you can return to the main page and try again.</p>
      <Link href="/" style={buttonStyle}>Back to Home</Link>
    </div>
  );
};

export default OrderNotFoundError;
