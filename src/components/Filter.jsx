import React, { useState } from "react";
import { Cancel } from "@mui/icons-material";

const Filter = () => {
  const [filter, setFilter] = useState(false);

  const setFilterActive = () => setFilter((prevstate) => !prevstate);

  return (
    <div className="filter">
      <div className="filter-mobile flex justify-between border-2 border-custom-gray xs:hidden">
        <div> category + rating sort </div>
        <button
          className="border-2 border-custom-gray p-1"
          onClick={setFilterActive}
        >
          Filter
        </button>
        {filter && (
          <div>
            <div><Cancel/></div>
            <div className="absolute top-[20%] left-1/2 flex h-[200px] w-[99%] -translate-x-1/2 -translate-y-1/2 transform bg-gray-200">
              <div className="filter-left-container border-4 border-green-600">
                filter left container
              </div>
              <div className="filter-right-container border-4 border-blue-600">
                filter right container
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="filter-desktop flex h-[15rem] w-full justify-between bg-yellow-300 max-xs:hidden">
        <div className="category bg-custom-gray">category 1</div>
        <div className="sort bg-slate-600 ">pricelow</div>
      </div>
    </div>
  );
};

export default Filter;
