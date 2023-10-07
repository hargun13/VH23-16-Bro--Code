import React from "react";
import DoughnutChart from "./DoughnutChart";
import Recent from "./Recent";
import Notifications from "./Notifications";

const UserDashboard = () => {
  const appliedScholarships = [
    {
      name: "Central Sector Scholarship Scheme for College and University Students",
      logo: "https://buddy4study.s3.ap-southeast-1.amazonaws.com/article/wp-content/uploads/2022/08/06155611/Central-Sector-Scholarship-%E2%80%93-A-Scholarship-Scheme-for-College-and-University-Students.jpg",
      description: "Scholarship for undergraduate students.",
      eligibility:
        "Class 12th passed students pursuing regular college/university courses",
      awardingAuthority: "Ministry of Education, Government of India",
      benefits: "Rs. 10,000 to Rs. 20,000 per annum",
    },
    {
      name: "Central Sector Scholarship Scheme for College and University Students",
      logo: "https://buddy4study.s3.ap-southeast-1.amazonaws.com/article/wp-content/uploads/2022/08/06155611/Central-Sector-Scholarship-%E2%80%93-A-Scholarship-Scheme-for-College-and-University-Students.jpg",
      description: "Scholarship for undergraduate students.",
      eligibility:
        "Class 12th passed students pursuing regular college/university courses",
      awardingAuthority: "Ministry of Education, Government of India",
      benefits: "Rs. 10,000 to Rs. 20,000 per annum",
    },
    {
      name: "Central Sector Scholarship Scheme for College and University Students",
      logo: "https://buddy4study.s3.ap-southeast-1.amazonaws.com/article/wp-content/uploads/2022/08/06155611/Central-Sector-Scholarship-%E2%80%93-A-Scholarship-Scheme-for-College-and-University-Students.jpg",
      description: "Scholarship for undergraduate students.",
      eligibility:
        "Class 12th passed students pursuing regular college/university courses",
      awardingAuthority: "Ministry of Education, Government of India",
      benefits: "Rs. 10,000 to Rs. 20,000 per annum",
    },
  ];
  return (
    <div className="h-screen bg-[#f0f3fc] ">
      <div className=" py-5 flex justify-evenly h-1/2 w-screen gap-5 px-5">
        <div className="w-2/5 h-full shadow-xl bg-white">
          <DoughnutChart />
        </div>
        <div className="w-2/5 h-full p-2 shadow-xl bg-white ">
          <Recent />
        </div>
        <div className="w-2/5 h-full p-2 shadow-xl bg-white">
          <Notifications />
        </div>
      </div>

      <div className="bg-inherit h-1/2 text-black mx-5 p-3">
        <h1 className="text-lg font-bold">Applied Scholarships</h1>
        <ul className="overflow-y-scroll h-full  ">
          {appliedScholarships.map((application) => {
            return (
              <li className="flex gap-5 bg-white mt-2 py-2 px-4 shadow-xl">
                <img src={application.logo} alt="" className="h-36" />
                <div className=" ">
                  <p className="text-xl font-semibold ">{application.name}</p>
                  <p className="text-md mb-2 ">{application.description}</p>
                  <p className="text-sm  ">
                    <span className="font-semibold">Eligible: </span>
                    {application.eligibility}
                  </p>
                  <p className="text-sm  ">
                    <span className="font-semibold">Organization: </span>
                    {application.awardingAuthority}
                  </p>
                  <p className="text-sm  ">
                    <span className="font-semibold">Benefits: </span>
                    {application.benefits}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
