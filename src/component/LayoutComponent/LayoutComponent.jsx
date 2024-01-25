import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header";

const LayoutComponent = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#5F3595",
      }}
    >
      <Header /> {/* Navbar at the top */}
      <main style={{ flex: 1, paddingBottom: "24px" }}>
        {/* Padding to ensure content doesn't overlap with footer */}
        {children} {/* Main content goes here */}
      </main>
      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default LayoutComponent;
