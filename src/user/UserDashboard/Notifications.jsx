import React from "react";
import Button from "@mui/material/Button";
import { BsArrowRight } from "react-icons/bs";

const Notifications = () => {
  const notificationData = [
    {
      title: "National Means-Cum-Merit Scholarship",
      logo: "https://dsel.education.gov.in/themes/nexus/assets/images/nmmss2.jpg",
      link: "https://example.com/national-means-scholarship",
    },
    {
      title: "Maharashtra State Scholarship",
      logo: "https://www.nationalmerit.org/s/1758/images/logo.png",
      link: "https://example.com/maharashtra-state-scholarship",
    },
    {
      title: "National Scholarship for Persons with Disabilities",
      logo: "https://higheredn.delhi.gov.in/sites/default/files/logo/emblem-dark-logo_4.png",
      link: "https://example.com/disabilities-scholarship",
    },
    {
      title: "National Means-Cum-Merit Scholarship",
      logo: "https://dsel.education.gov.in/themes/nexus/assets/images/nmmss2.jpg",
      link: "https://example.com/national-means-scholarship",
    },
    {
      title: "National Scholarship for Persons with Disabilities",
      logo: "https://higheredn.delhi.gov.in/sites/default/files/logo/emblem-dark-logo_4.png",
      link: "https://example.com/disabilities-scholarship",
    },
    {
      title: "Maharashtra State Scholarship",
      logo: "https://www.nationalmerit.org/s/1758/images/logo.png",
      link: "https://example.com/maharashtra-state-scholarship",
    },
  ];
  return (
    <div className="p-2 overflow-y-scroll h-full   ">
      <h1 className="font-semibold">Latest scholarships</h1>
      <ul className="text-black pt-5">
        {notificationData.map((notification) => {
          return (
            <li className="p-2 border-b-2 flex justify-between gap-2">
              <div className="flex gap-2">
                <img src={notification.logo} className="h-[56px]" alt="" />
                <p className="font-bold text-md">{notification.title}</p>
              </div>
              <div className="flex justify-between px-3 items-center">
                <a href={notification.link} target="_blank" rel="noreferrer">
                  <Button
                    style={{
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      width: "100%",
                    }}
                    className="text-white font-bold flex items-center justify-center gap-5 group"
                    variant="contained"
                  >
                    <span className="">Check</span>
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

export default Notifications;
