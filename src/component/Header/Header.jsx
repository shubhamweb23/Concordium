import React from "react";
import CustomButton from "../CustomButton";

import assetImage from "../../assets";
import "./Header.css";
import { yellow } from "@mui/material/colors";

const Header = () => {
  return (
    <header>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            // justifyContent: "space-between",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img
            src={assetImage.logo}
            alt="logo"
            // width={32}
            height={32}
          />
          <img
            // style={{ padding: "5px" }}
            src={assetImage.concordium}
            alt="concordium"
            // width={32}
            height={20}
          />
          <img
            style={{ paddingTop: "5px" }}
            src={assetImage.namespacing}
            alt="namespacing"
            // width={32}
            height={25}
          />
          {/* &nbsp;
          <span className="">Concordium</span>
          <span className="">&nbsp;Naming Service</span> */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            // width: "250px",
          }}
        >
          <span className="headerText">Docs</span>
          <div
            style={{
              backgroundColor: "#F2C946",
              padding: "4px 4px 12px 4px",
              borderRadius: "28px",
            }}
          >
            <CustomButton
              //   style={{
              //     display: "flex",
              //     alignItems: "center",
              //   }}
              className="headerButton"
            >
              <img
                style={{ backgroundColor: "#E0FD73", padding: "4px" }}
                src={assetImage.planet}
                alt="planet"
                width={24}
                height={24}
              />
              &nbsp; <span className="headerText">Connect Wallet</span>
              &nbsp;
              <img
                src={assetImage.arrowDown}
                alt="Down arrow"
                width={16}
                height={16}
              />
            </CustomButton>
          </div>
          <div
            style={{
              backgroundColor: "#F2C946",
              padding: "4px 4px 12px 4px",
              borderRadius: "28px",
            }}
          >
            <CustomButton
              style={{
                padding: "12px 16px",
                borderRadius: "32px",
                backgroundColor: "#5F3595",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={assetImage.cart} alt="cart" width={24} height={24} />
            </CustomButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
