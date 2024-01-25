import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: "white",
    padding: "24px",
    whiteSpace: "nowrap", // Prevent text from wrapping to the next line
    overflow: "hidden", // Hide overflow
    textOverflow: "ellipsis",
    // backgroundColor: "red",
    // display: "flex",
    // width: "100%",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      //   borderColor: "#2D2D2D",
      borderWidth: 1,
      borderRadius: "16px",
      border: "none",
    },
    "&:hover fieldset": {
      //   borderColor: "#2D2D2D",
    },
    "&.Mui-focused fieldset": {
      //   borderColor: "#2D2D2D",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "rgba(255, 255, 255, 1.7)",
    fontSize: "18px",
    fontWeight: "700",
  },
  "& .MuiSelect-select": {
    border: "none",
    "&:focus": {
      backgroundColor: "transparent",
    },
  },
  "& .MuiSelect-icon": {
    color: "white",
  },
  // You may want to remove the underline as well
  "& .MuiInput-underline:before": {
    borderBottom: "none",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottom: "none",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "none",
  },
  "& .MuiSelect-select:focus": {
    outline: "none",
  },
}));

export default function CustomInput({
  style,
  dropdowndata,
  placeholder,
  ...props
}) {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState(
    dropdowndata && dropdowndata.length > 0 ? dropdowndata[0].value : ""
  );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const inputStyle = {
    ...(style || {}),
    // zIndex: zIndex || "auto",
  };

  const renderEndAdornment = () => {
    if (dropdowndata && dropdowndata.length > 0) {
      return (
        <InputAdornment position="end">
          <Select
            value={selectValue}
            onChange={handleSelectChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {dropdowndata.map((item) => (
              <MenuItem key={item.id} value={item.value}>
                {item.value}
              </MenuItem>
            ))}
          </Select>
        </InputAdornment>
      );
    } else {
      // Render the percentage symbol when dropdowndata is not available
      return (
        <InputAdornment position="end">
          <span style={{ color: "White", paddingRight: "10px" }}>%</span>
        </InputAdornment>
      );
    }
  };

  return (
    <CustomTextField // Use the CustomTextField instead of the default TextField
      //   label="Input with Dropdown"
      variant="outlined"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      InputProps={{
        style: inputStyle,
        endAdornment: renderEndAdornment(),
      }}
    />
  );
}
