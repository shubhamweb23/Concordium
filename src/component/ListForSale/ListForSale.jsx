import React, { useEffect, useState } from "react";
import "./ListForSale.css";
import assetImage from "../../assets";
// import { yellow } from "@mui/material/colors";
import { style } from "../../Styles";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import ListForSaleViewListingModal from "../ListForSaleViewListingModal/ListForSaleViewListingModal";
import ListForSaleLoadingModal from "../ListForSaleLoadingModal/ListForSaleLoadingModal";

const price = [
  {
    id: "CCD",
    value: "CCD",
  },
];

const date = [
  {
    id: "30 Days",
    value: "30 days",
  },
];

const ListForSale = () => {
  const [isViewListingModalOpen, setIsViewListingModalOpen] = useState(false);
  const [isListForSaleLoadingModalOpen, setIsListForSaleLoadingModalOpen] =
    useState(false);

  const handleCloseViewForSaleLoadingModal = () => {
    setIsListForSaleLoadingModalOpen(false);
  };

  const handleCloseViewListingModal = () => {
    setIsViewListingModalOpen(false);
  };

  // const handleClick = () => {
  //   console.log("clicked===>");
  //   setIsViewListingModalOpen(true);
  //   setTimeout(())
  // };

  const handleClick = () => {
    console.log("clicked===>");
    setIsListForSaleLoadingModalOpen(true);
    setTimeout(() => {
      setIsListForSaleLoadingModalOpen(false);
      setIsViewListingModalOpen(true);
    }, 3000);
  };

  return (
    <div style={{ padding: "10px 100px" }}>
      {isListForSaleLoadingModalOpen && (
        <ListForSaleLoadingModal
          isOpen={isListForSaleLoadingModalOpen}
          onClose={handleCloseViewForSaleLoadingModal}
        />
      )}
      {isViewListingModalOpen && (
        <ListForSaleViewListingModal
          isOpen={isViewListingModalOpen}
          onClose={handleCloseViewListingModal}
        />
      )}
      <div className="listForSaleMainHeading">List for Sale</div>
      <div className="listForSaleTextHeading">My Domain</div>
      <div className="listForSaleBottomContainer">
        <div className="listforsaleLeftContainer">
          <div className="listforSaleLeftContent">
            <div>
              <img
                style={{ position: "relative" }}
                src={assetImage.Bluishround}
                alt="blue circle"
              />
              <img
                style={{ position: "absolute", left: "180px" }}
                src={assetImage.purpleEllipse}
                alt="purple circle"
              />
              <img
                style={{
                  position: "absolute",
                  paddingTop: "10px",
                  left: "194px",
                  //   paddingRight: "100px",
                }}
                src={assetImage.logo}
                width={64}
                height={64}
                alt="blue circle"
              />
            </div>
            <div className="listForSaleLeftcontainerHeading">mrtoys.ccd</div>
            <div className="listForSaleLeftcontainertext">Concordium</div>
            <div className="listForSaleLeftContentBotom">
              <div>
                <div className="listForSaleLeftcontainerBottomHeading">
                  Price
                </div>
                <div className="listForSaleLeftcontainerBottomData">
                  Not for sale
                </div>
              </div>
              <div>
                <div className="listForSaleLeftcontainerBottomHeading">
                  Best Offer
                </div>
                <div className="listForSaleLeftcontainerBottomData">
                  no offr yet
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="listforsaleRightContainer">
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src={assetImage.yellowVector}
                alt="yellow vector"
                style={{ display: "block" }}
              />
              <img
                src={assetImage.togglrrightfilled}
                alt="toggle right"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 3,
                  zIndex: 10,
                }}
              />
            </div>

            <div>
              <div className="listForSaleRightContainerMainHeading">
                List on marketplace
              </div>
              <div className="listForSaleRightContainerMainHeadingBelowText">
                This will list your domain on the public marketplace which will
                allow other users to instantly purchase it.
              </div>
            </div>
          </div>
          <div className="toggleFixedTimedAuction">
            <div className="toggleFixed">
              <div className="tagContainer">
                <img src={assetImage.yellowTag} alt="tag" />
              </div>
              <div className="listForsaleToggleTagText">Fixed Price</div>
            </div>
            <div className="toggleTimedAuction">
              <div className="listForSalerighttagContainer">
                <img src={assetImage.bidIcon} alt="tag" />
              </div>
              <div className="listForSalerighttagContainertoggletext">
                Timed Auction
              </div>
            </div>
          </div>
          <div className="listForSaleTextfieldOuterDesign">
            <div
              style={{
                border: "1px solid black",
                borderRadius: "16px",
                width: "49.3vw",
              }}
            >
              <CustomInput
                style={style.inputtext}
                placeholder="Enter minimum bid"
                dropdowndata={price}
              />
            </div>
          </div>
          <div
            className="listForSalePriceContainer"
            // style={{ fontSize: "100px" }}
          >
            <div>
              <div className="listForSalePriceTextContainer">
                <div
                  style={{ color: "var(--dark-theme-type-secondary, #D8D8D8)" }}
                >
                  Price
                </div>
                <div>3000 CCD</div>
              </div>
              <div className="listForSalePriceTextContainer">
                <div
                  style={{ color: "var(--dark-theme-type-secondary, #D8D8D8)" }}
                >
                  CNS fee
                </div>
                <div>1%</div>
              </div>
            </div>
            <div className="listForSalePriceContainerLine"></div>
            <div>
              <div
                style={{ fontSize: "18px" }}
                className="listForSalePriceTextContainer"
              >
                <div
                  style={{ color: "var(--dark-theme-type-secondary, #D8D8D8)" }}
                >
                  You will receive
                </div>
                <div>3,960.01 CCD</div>
              </div>
            </div>
          </div>
          <div>
            <div className="listForSaleTextfieldOuterDesign">
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "16px",
                  width: "49.3vw",
                }}
              >
                <CustomInput
                  style={style.inputtext}
                  placeholder="Date"
                  dropdowndata={date}
                />
              </div>
            </div>
            <div className="listForSaleRightContainerInputBottomText">
              This is the date when the listing expires
            </div>
          </div>
          <div>
            <div className="listForSaleTextfieldOuterDesign">
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "16px",
                  width: "49.3vw",
                }}
              >
                <CustomInput
                  style={style.inputtext}
                  placeholder="Royalties"
                  //  dropdowndata={data}
                />
              </div>
            </div>
            <div className="listForSaleRightContainerInputBottomText">
              This is the date when the listing expires
            </div>
          </div>
          <div>
            <CustomButton
              className="ListForSaleContinueButton"
              style={{ width: "100%" }}
              onClick={handleClick}
            >
              Continue
            </CustomButton>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ListForSale;
