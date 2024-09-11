import React from "react";
import PlanComponent from "./planComponent";
import AngleWidthComponent from "./angleWidthComponent";
import HourBasedProduction from "./hourBasedProduction";
import RecipeDetails from "./recipeDetails";
import PieChart from "./pieChart";
import BarChartComponent from "./BarChartComponent";

const BodyContent = () => {
  return (
    <div className="bg-[white] flex flex-col py-2 mt-5 rounded-[20px] z-10 mb-5 ">
      {/* grid method */}
      <div className="grid grid-cols-3 gap-4 px-2 ">
        <PlanComponent />
        <AngleWidthComponent />
        <HourBasedProduction />
        <RecipeDetails />
        <PieChart />
        <BarChartComponent />
      </div>

      {/* flex method */}

      {/* <div className="">
        <div className=" flex flex-row">
          <PlanComponent />
          <AngleWidthComponent />
          <HourBasedProduction />
        </div>
        <div className=" flex flex-row">
          <RecipeDetails />
          <PieChart />
          <BarChartComponent />
        </div>
      </div> */}
    </div>
  );
};

export default BodyContent;
