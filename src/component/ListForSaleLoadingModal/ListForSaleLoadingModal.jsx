import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

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

export default function ListForSaleLoadingModal({ isOpen, onClose }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style}>
        <Typography
          sx={{ color: "white", fontSize: "28px", fontWeight: "700" }}
        >
          Text in a modal
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "16px",
              fontWeight: "400",
              fontStyle: "normal",
              lineHeight: "24px",
            }}
            id="modal-modal-title"
          >
            Communicating with the wallet. Please sign message to set fixed
            price.
          </Typography>
        </Typography>
        {/* loader */}
        <Stack
          sx={{
            color: "#467F67",
            display: "flex",
            justifyContent: "center",
          }}
          spacing={10}
          direction="row"
        >
          <CircularProgress color="inherit" thickness={5} />
        </Stack>

        <button
          onClick={onClose}
          style={{
            padding: "12px 24px",
            borderRadius: "16px",
            border: "2px solid #F2C946",
            backgroundColor: "black",
            color: "white",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          Cancel
        </button>
      </Box>
    </Modal>
  );
}
