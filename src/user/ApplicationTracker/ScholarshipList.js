import { Button } from "@mui/material";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import scholarshipData from "../Scholarships/scholarshipData";
import { Link } from "react-router-dom";

function ScholarshipList() {
  const initialVisibleItems = 9; // Number of items to initially display
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);
  const appliedScholarship = scholarshipData.filter(
    (application) => application.applied === true
  );

  // Function to load more items
  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  return (
    <div>
      <p className="text-4xl px-10 pt-10">Scholarship You Have Applied For</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
        {appliedScholarship
          .slice(0, visibleItems)
          .map((scholarshipData, index) => (
            <div
              key={index}
              className="border-[1px] border-gray-100 shadow-2xl m-3 p-5 rounded-2xl transition duration-500 hover:-translate-y-2 flex flex-col items-center justify-between"
            >
              <div className="mb-4">
                <img
                  src={scholarshipData.logo}
                  alt={scholarshipData.title}
                  className="h-[250px] w-full rounded-2xl shadow-xl"
                />
                <p className="py-2 text-2xl font-bold text-[#1b1b1b] w-full">
                  {scholarshipData.title}
                </p>
                <p className="py-2 text-sm tracking-widest font-normal text-[#1b1b1b] w-full">
                  Degree: {scholarshipData.degrees}
                </p>
                <p>Fees Covered: {scholarshipData.funds}</p>
                <p>Location: {scholarshipData.location}</p>
              </div>

              <Button
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  width: "100%",
                }}
                className="text-white text-xl font-bold flex items-center justify-center gap-5 group"
                variant="contained"
              >
                <Link to="/ApplicationTracker">Track</Link>
                <BsArrowRight
                  size={30}
                  className="transition duration-300 group-hover:translate-x-4"
                />
              </Button>
            </div>
          ))}
      </div>

      {visibleItems < scholarshipData.length && (
        <div className="w-full flex items-center justify-center mb-10 mt-5">
          <Button
            onClick={loadMoreItems}
            style={{
              paddingLeft: "36px",
              paddingRight: "36px",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
            className=" text-white text-xl font-bold flex items-center justify-center gap-5  group "
            variant="contained"
          >
            Explore More Scholarships
            <BsArrowRight
              size={30}
              className="transition duration-300 group-hover:translate-x-4 "
            />
          </Button>
        </div>
      )}
    </div>
  );
}

export default ScholarshipList;
