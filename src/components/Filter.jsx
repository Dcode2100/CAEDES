import React, { useState } from "react";
import { ArrowDownward} from "@mui/icons-material";
import { categories,sorting } from "../common/Common";

const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const setFilterActive = () => setFilter((prevstate) => !prevstate);
  const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

  return (
    <div className="filter">
      <div className="filter-mobile flex justify-between border-2 border-custom-gray xs:hidden">
        <div className="h-[2.5rem] overflow-hidden p-[0.3rem]">
          {" "}
          category + rating sort + rating + video + audio + linear
        </div>
        <button
          className="flex  border-2 border-gray-300 px-4 pt-1.5"
          onClick={setFilterActive}
        >
          Filter
          <ArrowDownward style={{ fontSize: "18px", marginTop: "0.23rem" }} />
        </button>
        {filter && (
          <div className="absolute top-[16.7rem] left-1/2 z-0 flex h-[400px] w-[99%] -translate-x-1/2 -translate-y-1/2 transform flex-col bg-gray-200">
            <div className="flex w-full justify-between">
              <h1 className="p-[0.7rem] font-semibold">Filters</h1>
              <button
                onClick={setFilterActive}
                className="p-[0.7rem] font-bold text-custom-red "
              >
                Close
              </button>
            </div>
            <div className="flex">
              <div className="filter-left-container w-[45%] bg-gray-300">
                <div className="bg-gray-600 py-1 pl-2 text-white">
                  {" "}
                  Categories{" "}
                </div>
                {categories.map((item) => (
                  <div
                    key={item.id}
                    className="border-y-[1px] border-gray-400 py-[11px] pl-4 text-xs font-medium"
                  >
                    {item.id}
                  </div>
                ))}
              </div>
              <div className="filter-right-container box-border w-[55%] border-4 ">
                <div className="font-bold ml-0.5 text-gray-700 "> Sort Options </div>
                {sorting.map((item) => (
                  <button
                    className="my-2 ml-2.5 flex rounded-md bg-gray-500 p-2 text-xs text-white font-medium"
                    key={item.id}
                  >
                    {item.id}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="filter-desktop flex h-[15rem] w-full justify-between bg-yellow-300 max-xs:hidden">
        <div className="category bg-custom-gray">category 1</div>
        
      </div>
    </div>
  );
};

export default Filter;
