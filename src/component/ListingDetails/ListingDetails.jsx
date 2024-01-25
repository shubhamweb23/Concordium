import React from "react";
import AccordionListingDetails from "../AccordianListingDetails/AccordianListingDetails";
import assetImage from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";
// import CustomButton from "../CustomButton";
import "./ListingDetails.css";

const AccordianData = [
  {
    heading: "Details",
  },
  {
    heading: "Royalties",
  },
  {
    heading: "Records",
  },
  {
    heading: "Offers",
  },
  {
    heading: "Domain Activity",
  },
];

const ListingDetails = () => {
  const location = useLocation();
  const state = location.state || {};

  const navigate = useNavigate();

  console.log("state==>", state, state.mydomain);
  return (
    <div className="listingDetailsMainContainer">
      <div className="listingDetailscontentContainer">
        <div style={{ maxWidth: "inherit", width: "100%" }}>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <img
              width="150"
              height="150"
              src={assetImage.Bluishround}
              alt="round blue"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                // justifyContent: "center",
              }}
            >
              <div className="listingDetailsMainHeading">mrtoys.ccd</div>
              <div className="listingDetailsbottomText">
                <div className="listingDetailsBluebackground">Listed by</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  FinVobfi4t...X57xHcTWLfW
                </div>
                <div className="listingDetailsCopyContainer">
                  <img src={assetImage.copy} alt="copyimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {!state.mydomain && (
          <div className="listDetailsPriceContainer">
            <div>Fixed Price</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ textAlign: "left" }}> 3,999 CCD</div>
              <div style={{ textAlign: "right" }}>8.37 USD</div>
            </div>
          </div>
        )}
        {/* other button */}
        {state.mydomain && (
          <div style={{ width: "100%", display: "flex", gap: "10px" }}>
            <div
              className="listingdetailsbuttonDesign"
              style={{
                width: "363px",
                height: "64px",
                borderRadius: "28px",
                background: "#F2C946",
                position: "relative",
              }}
            >
              <button
                className="listingdetailsbuttonStyle"
                onClick={() => {
                  navigate("/listforSale");
                }}
              >
                List for Sale
              </button>
            </div>
            <div
              className="listingdetailsbuttonDesign"
              style={{
                background: "#E86E3A",
              }}
            >
              <button className="listingdetailsbuttonStyle">Renew</button>
            </div>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "28px",
                background: "#F2C946",
                position: "relative",
              }}
            >
              <img
                style={{
                  top: "3px",
                  left: "5px",
                  padding: "15px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "32px",
                  background: "#5F3595",
                  position: "absolute",
                }}
                src={assetImage.refresh}
                alt="dcdcddc"
              />
            </div>
          </div>
        )}
        {/* other button closing */}

        {/* ***************************** */}

        {/* button improved */}
        {!state.mydomain && (
          <div style={{ width: "100%", display: "flex", gap: "10px" }}>
            <div
              style={{
                width: "742px",
                height: "64px",
                borderRadius: "28px",
                background: "#F2C946",
                position: "relative",
              }}
            >
              <button
                style={{
                  display: "flex",
                  padding: "12px 24px",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "32px",
                  background: "#5F3595",
                  width: "735px",
                  fontSize: "18px",
                  fontWeight: "700",
                  position: "absolute",
                  top: "5px",
                  left: "3px",
                  color: "white",
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Remove from Sale
              </button>
            </div>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "28px",
                background: "#F2C946",
                position: "relative",
              }}
            >
              <img
                style={{
                  top: "3px",
                  left: "5px",
                  padding: "15px 16px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "32px",
                  background: "#5F3595",
                  position: "absolute",
                }}
                src={assetImage.refresh}
                alt="dcdcddc"
              />
            </div>
          </div>
        )}
        {/* button closed */}
        <div>
          {AccordianData.map((data, index) => {
            return (
              <AccordionListingDetails title={data.heading} index={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
