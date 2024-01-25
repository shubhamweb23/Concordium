import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import assetImage from "../../assets"; // Make sure this import path is correct

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 410,
  bgcolor: "black",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "32px",
};

export default function ListForSaleViewListingModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={assetImage.Bluishround} alt="blue img" />
        </div>
        <Typography
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <Typography
            component="div"
            sx={{
              color: "#FFF",
              fontSize: "28px",
              fontWeight: "700",
              maxWidth: "410px",
              textAlign: "center",
            }}
          >
            Your domain <span style={{ color: "#F2C946" }}>mrtoys.ccd</span> is
            successfully put on sale.
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "16px",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "16px",
              display: "flex",
              justifyContent: "center",
            }}
            id="modal-modal-title"
          >
            Let’s share this to the World
          </Typography>
          <Typography
            component="div"
            sx={{
              color: "pink",
              display: "flex",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            {/* Social media and share icons */}
          </Typography>
        </Typography>

        <Typography
          sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <button
            style={{
              padding: "12px 24px",
              borderRadius: "16px",
              border: "2px solid #F2C946",
              backgroundColor: "#F2C946",
              color: "var(--dark-theme-type-on-color, #000)",
              fontSize: "18px",
              fontWeight: 700,
            }}
            onClick={() => {
              navigate("/listingDetailsView");
            }}
          >
            View Listing
          </button>
          <button
            style={{
              padding: "12px 24px",
              borderRadius: "16px",
              border: "2px solid #F2C946",
              backgroundColor: "black",
              color: "white",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            List another domain
          </button>
        </Typography>
      </Box>
    </Modal>
  );
}
