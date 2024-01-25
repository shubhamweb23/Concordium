import React, { useState } from "react";
import "./CustomTable.css";

const CustomTable = ({ headers, data, heading, boxdata }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  //   const [activeBox, setActiveBox] = useState(null);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const displayText = `Showing ${startIndex + 1}-${endIndex} of ${
    data.length
  } Domains`;

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const nextPage = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(data.length / itemsPerPage))
    );
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  console.log("boxdata inside table==>", boxdata);

  return (
    <div className="table-container">
      <div className="table-header">
        <h2 className="table-heading">{heading}</h2>
        {data.length > 5 && (
          <div className="items-per-page-selector">
            <label htmlFor="items-per-page">Items per page:</label>
            <select
              id="items-per-page"
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        )}
        <div className="display-info">{displayText}</div>
      </div>
      <table>
        <thead>
          {headers.some((header) => header.label) && (
            <tr>
              {headers.map((header) => (
                <th
                  key={header.key}
                  style={{ width: header.width }}
                  //   className={header.label === "" ? "no-bottom-border" : ""}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {data.slice(startIndex, endIndex).map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                {headers.map((header) => (
                  <td key={header.key} style={{ width: header.width }}>
                    {header.render ? header.render(item) : item[header.key]}
                  </td>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {data.length > itemsPerPage && (
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomTable;
