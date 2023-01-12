const getTodayAsDate = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return today;
};

const getYesterdayAsDate = () => {
  const yesterday = new Date(Date.now() - 86400000);
  yesterday.setHours(0, 0, 0, 0);

  return yesterday;
};

const isGreaterDate = (d1, d2) => {
  let date1 = new Date(d1).getTime();
  let date2 = new Date(d2).getTime();

  return date1 > date2;
};

const isInToday = (date) =>
  new Date(date).getTime() > getTodayAsDate().getTime();

const isBetweenTodayAndYesterday = (date) => {
  const checkDate = new Date(date).getTime();

  return (
    checkDate < getTodayAsDate().getTime() &&
    checkDate > getYesterdayAsDate().getTime()
  );
};

const DateHelper = {
  isGreaterDate,
  isInToday,
  isBetweenTodayAndYesterday,
};

export default DateHelper;
