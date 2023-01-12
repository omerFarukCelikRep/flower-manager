import React, { useEffect, useState } from "react";
import DateHelper from "../../../../helpers/DateHelper";
import FlowerService from "../../../../services/FlowerService";
import OverviewBox from "./box/OverviewBox";

const Overview = () => {
  const [flowerCount, setFlowerCount] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const getAllFlowers = async () => {
      const result = await FlowerService.getAllAsync();
      if (!result.isSuccess) {
        return;
      }

      setFlowerCount(result.data.length);
      const yesterdayCount = result.data.filter((flower) =>
        DateHelper.isBetweenTodayAndYesterday(flower.createdDate)
      );
      const todayCount = result.data.filter((flower) =>
        DateHelper.isInToday(flower.createdDate)
      );

      setStatus(todayCount > yesterdayCount);
    };

    getAllFlowers();
  }, []);
  return (
    <>
      <div className="overview-boxes">
        <OverviewBox
          title={"Total Flowers"}
          flowerNumber={flowerCount}
          status={status}
        />
        <OverviewBox
          title={"Total Flowers"}
          flowerNumber={flowerCount}
          status={status}
        />
        <OverviewBox
          title={"Total Flowers"}
          flowerNumber={flowerCount}
          status={status}
        />
        <OverviewBox
          title={"Total Flowers"}
          flowerNumber={flowerCount}
          status={status}
        />
      </div>
    </>
  );
};

export default Overview;
