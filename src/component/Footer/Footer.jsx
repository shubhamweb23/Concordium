import React from "react";
import assetImage from "../../assets";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        // Anchors the footer to the bottom of the viewport
        // You can set a background color to make the footer stand out
        // zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={assetImage.concordiumTextLogo} alt="logo" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "104px",
            height: "56px",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            borderRadius: "4px",
            gap: "7.891px 7.988px 5.927px 7.988px",
            justifyContent: "center",
            padding: "7px",
          }}
        >
          <img src={assetImage.poweredBy} alt="poweredby" />
          <img src={assetImage.web23Logo} alt="web23" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            justifyContent: "center",
            marginLeft: "16px",
          }}
        >
          <div>© 2023 All Rights Reserved</div>
          <div>Privacy Policy</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <div>
          <img src={assetImage.facebook} alt="facebook" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={assetImage.twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
