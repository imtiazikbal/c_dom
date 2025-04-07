export default function Custom404() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        color: "#333",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          color: "#dc3545",
          margin: "0",
          fontWeight: "700",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "2rem",
          color: "#495057",
          margin: "10px 0 20px",
          fontWeight: "500",
        }}
      >
        Page Not Found
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#6c757d",
          marginBottom: "30px",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        Sorry, the page you are looking for doesn't exist or has been moved. Please check the URL or go back to the homepage.
      </p>
      <a
        href="/"
        style={{
          textDecoration: "none",
          padding: "15px 30px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "30px",
          fontSize: "1rem",
          fontWeight: "600",
          boxShadow: "0 4px 6px rgba(0, 123, 255, 0.2)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 6px 8px rgba(0, 123, 255, 0.3)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 6px rgba(0, 123, 255, 0.2)";
        }}
      >
        Go Back Home
      </a>
    </div>
  );
}
