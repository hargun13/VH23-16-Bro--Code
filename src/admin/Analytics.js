import React, { Fragment, useState } from "react";
import GroupChart from "./AdminData/GroupChart";
import PieChart from "./AdminData/Piechart";
import SingleLineChart from "./AdminData/SingleLineChart";
import BarChart from "./AdminData/BarChart";
import LineChart from "./AdminData/LineChart";

// import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const AdminData = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex text-black justify-center gap-3 mx-5 h-[50vh]">
        <div className="bg-white shadow-xl shadow-slate-300 w-full ">
          <GroupChart />
        </div>
        <div className="bg-white shadow-xl shadow-slate-300 w-full">
          <PieChart />
        </div>
      </section>

      <section className="flex gap-3 h-[50vh] mx-5">
        <div className="bg-white shadow-xl shadow-slate-300 w-1/2">
          <SingleLineChart />
        </div>

        <div className="flex flex-col gap-3 w-1/3 h-[50vh]">
          <div className="bg-white shadow-xl shadow-slate-300 h-[75vh]">
            <BarChart />
          </div>
        </div>
      </section>

      <section className="bg-white shadow-xl shadow-slate-300 h-[90vh] mx-5">
        <LineChart />
      </section>
    </div>
  );
};

const Analytics = () => {
  return (
    <Fragment>
      <h1 className="my-5 px-5 text-2xl font-bold">Admin Analytics</h1>
      <AdminData className="mt-10" />
    </Fragment>
  );
};

export default Analytics;
