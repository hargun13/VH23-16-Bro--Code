import React from "react";
import Button from "@mui/material/Button";
import { BsArrowRight } from "react-icons/bs";

const Recent = () => {
  const recentScholarshipViewed = [
    {
      title: "Schaefer Halleens Social Equity Scholarship",
      degrees: "Master, Bachelor, Phd",
      location: "united-states",
      link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    },
    {
      title: "Schaefer Halleens Social Equity Scholarship",
      degrees: "Master, Bachelor, Phd",
      location: "united-states",
      link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    },
    {
      title: "Schaefer Halleens Social Equity Scholarship",
      degrees: "Master, Bachelor, Phd",
      location: "united-states",
      link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    },
    {
      title: "Schaefer Halleens Social Equity Scholarship",
      degrees: "Master, Bachelor, Phd",
      location: "united-states",
      link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    },
    {
      title: "Schaefer Halleens Social Equity Scholarship",
      degrees: "Master, Bachelor, Phd",
      location: "united-states",
      link: "https://www.schaeferhalleen.com/social-equity-scholarship/",
    },
  ];
  return (
    <div className="p-2 overflow-y-scroll h-full   ">
      <h1 className="font-semibold">Recently Viewed Scholarships</h1>
      <ul className="text-black pt-5">
        {recentScholarshipViewed.map((recent) => {
          return (
            <li className="p-2 border-b-2">
              <p className="font-bold text-lg">{recent.title}</p>
              <div className="flex justify-between px-3 items-center">
                <div clas>
                  <p className="text-sm">
                    <span className="font-semibold">Degree: </span>
                    {recent.degrees}
                  </p>
                  <p>
                    <span className="font-semibold text-sm">Location: </span>
                    {recent.location}
                  </p>
                </div>
                <a href={recent.link} target="_blank" rel="noreferrer">
                  <Button
                    style={{
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      width: "100%",
                    }}
                    className="text-white text-xl font-bold flex items-center justify-center gap-5 group"
                    variant="contained"
                  >
                    <BsArrowRight
                      size={20}
                      className="transition duration-300 group-hover:translate-x-4"
                    />
                  </Button>
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recent;
