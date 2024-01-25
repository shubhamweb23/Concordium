import React from "react";
import LayoutComponent from "../../component/LayoutComponent/LayoutComponent";
import CustomTable from "../../component/CustomTable/Customtable";
import assetImage from "../../assets";
import { useNavigate } from "react-router-dom";
import PopOveComponent from "../../component/PopOverComponent/PopOverComponent";

const tableData = [
  {
    id: 1,
    name: "Item 1vf",
    description: "Description 1",
    price: "$10",
    show: true,
  },
  {
    id: 2,
    name: "Item 2vv",
    description: "Descriptionsklnvsv",
    price: "$20",
  },
  {
    id: 3,
    name: "Item 2sz",
    description: "xxxc x cxc  2",
    price: "$20",
    show: true,
  },
  {
    id: 4,
    name: "Item 2e",
    description: "Descrip  cc c tion 2",
    price: "$20",
    show: true,
  },
  // {
  //   id: 5,
  //   name: "Item 2e",
  //   description: "Descript c c ion 2",
  //   price: "$20",
  //   show: true,
  // },
  // {
  //   id: 6,
  //   name: "Item 1qq",
  //   description: "Descri c c ption 1",
  //   price: "$10",
  // },
  // {
  //   id: 7,
  //   name: "Item 2543",
  //   description: "Descr c ciption 2",
  //   price: "$20",
  // },
  // {
  //   id: 8,
  //   name: "Item 254",
  //   description: "Descri c c ption 2",
  //   price: "$20",
  // },
  // {
  //   id: 9,
  //   name: "Item 4",
  //   description: "Descrip c c  c c x\\vdx xvtion 2",
  //   price: "$20",
  // },
  // { id: 10, name: "Item 2", description: "Description 2", price: "$20" },

  // ... other data items
];

const MyDominsView = () => {
  const navigate = useNavigate();

  const handleActionClick = (item) => {
    console.log("item--->", item);
    navigate("/listingDetailsView", { state: { mydomain: "true" } });
    // setBoxdata((prevState) => ({
    //   ...prevState,
    //   visible: !prevState.visible,
    //   itemId: item.id,
    // }));
  };

  //   <PopOveComponent />

  const tableHeaders = [
    {
      key: "name",
      // label: "Name",
      width: "70%",
      render: (item) => (
        <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <div>
            <img
              style={{ position: "relative" }}
              width={24}
              height={24}
              src={assetImage.Bluishround}
              alt={`${item.name}  1`}
              className="table-image"
            />
            <img
              style={{ position: "absolute", left: "30px" }}
              width={24}
              height={24}
              src={assetImage.logo}
              alt={`${item.name} 2`}
              className="table-image"
            />
          </div>
          <div>{item.name}</div>
        </div>
      ),
    },
    //reqired for futher use
    // {
    //   key: "popoverTrigger",

    //   width: "25%",
    //   render: (item) => (
    //     <PopOveComponent item={item} />
    //   ),
    // },
    {
      // label: "For sale",
      key: "Forsale",
      width: "14%",
      render: (item) =>
        item.show && (
          <button
            className=""
            style={{
              background: "#F2C946",
              borderRadius: "24px",
              width: "144px",
              padding: "0pc 24px",
              height: "48px",
            }}
            onClick={() => handleActionClick(item)}
          >
            List For Sale
          </button>
        ),
    },
    {
      // label: "Manage",
      key: "Manage",
      width: "9%",
      render: (item) => (
        <button
          style={{
            border: " 2px solid #F2C946",
            padding: "0px 24px",
            height: "48px",
            borderRadius: "24px",
            background: "#5F3595",
          }}
          onClick={() => handleActionClick(item)}
        >
          Manage
        </button>
      ),
    },
  ];

  return (
    <LayoutComponent
      children={
        <CustomTable
          headers={tableHeaders}
          data={tableData}
          heading="Domain Listing"
        />
      }
    />
  );
};

export default MyDominsView;
