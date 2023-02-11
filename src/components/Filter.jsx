import React, { useState } from "react";
import { ArrowDownward } from "@mui/icons-material";
import { categories, sorting } from "../common/Common";
import {Slider} from '@mui/material';
const Filter = () => {
  const [filter, setFilter] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [value, setValue] = useState([0, 20]);

  const setFilterActive = () => setFilter((prevstate) => !prevstate);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  function valuetext(value) {
    return `${value}°C`;
  }

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
                <div className="ml-0.5 font-bold text-gray-700 ">
                  {" "}
                  Sort Options{" "}
                </div>
                {sorting.map((item) => (
                  <button
                    className="my-2 ml-2.5 flex rounded-md bg-gray-500 p-2 text-xs font-medium text-white"
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

      <div className="filter-desktop flex w-[14rem] flex-col justify-between rounded-lg border-2 bg-custom-graybg max-xs:hidden">
        <div className="p-5">
          <div className="categories ">
            <p className=" text-sm font-bold  text-custom-b">
              Shop by Category
            </p>
            <div className="ml-[0.5rem]">
              {categories.map((item) => (
                <p
                  key={item.id}
                  className="my-2 text-xs font-[600] text-custom-b"
                >
                  {item.id}
                </p>
              ))}
            </div>
          </div>
          <div className="price mrange my-4 w-full rounded-lg bg-white">
            <div className="p-3">
              <div className="border-b-2 border-slate-400 text-sm font-bold pb-2 mb-2">
                Price Range
              </div>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                size="small"
              />
            </div>
          </div>

          <div className="sort w-full rounded-lg bg-white">
            <div className="p-2">
              <div className="border-b-2 border-slate-400 text-sm font-bold mb-2 pb-2 pl-2">
                Sort By
              </div>
              <div className="ml-[0.5rem]">
                {sorting.map((item) => (
                  <p
                    key={item.id}
                    className="my-2 text-xs font-[600] text-custom-b"
                  >
                    {item.id}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
