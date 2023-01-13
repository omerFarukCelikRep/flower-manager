import React from "react";
import TrendList from "../../components/app/home/list/TrendList";
import Overview from "../../components/app/home/overview/Overview";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <Overview />
          <div className="sales-boxes">
            <TrendList />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
