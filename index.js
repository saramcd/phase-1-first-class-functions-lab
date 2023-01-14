const returnFirstTwoDrivers = function (drivers) {
  const firstTwoDrivers = drivers.slice(0, 2);
  return firstTwoDrivers;
};

const returnLastTwoDrivers = function (drivers) {
  const lastTwoDrivers = drivers.slice(-2);
  return lastTwoDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
  return function (fare) {
    return fare * num;
  };
};

const fareDoubler = (fare) => {
  const multipler = createFareMultiplier(2);
  const doubledFare = multipler(fare);
  return doubledFare;
};

const fareTripler = (fare) => {
  const multipler = createFareMultiplier(3);
  const triplededFare = multipler(fare);
  return triplededFare;
};

const selectDifferentDrivers = (drivers, func) => {
  return func(drivers);
};
