import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import ListForSaleView from "../views/ListForSale/ListForSaleView";
import ListingDetailsView from "../views/ListingDetailsView/ListingDetailsView";
import MyDominsView from "../views/MyDomains/MyDominsView";

const router = createBrowserRouter([
  {
    path: "/listforSale",
    element: <ListForSaleView />,
  },
  // {
  //   path: "/login",
  //   element: <LayoutComponent />, // Use the layout component here
  //   children: [
  //     {
  //       index: true, // This represents the default page for "/login"
  //       element: <NftComponent />, // Use the login page as the default child
  //     },
  //     {
  //       path: "test", // This will be "/login/test"
  //       element: <Test />,
  //     },
  //   ],

  // },
  {
    path: "/listingDetailsView",
    element: <ListingDetailsView />,
  },
  {
    path: "/",
    element: <MyDominsView />,
  },
]);

export default router;
