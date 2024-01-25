import React from "react";
import LayoutComponent from "../../component/LayoutComponent/LayoutComponent";
// import ListForSale from "../../component/ListForSale/ListForSale";
import ListingDetails from "../../component/ListingDetails/ListingDetails";

const ListingDetailsView = () => {
  return <LayoutComponent children={<ListingDetails />} />;
};

export default ListingDetailsView;
