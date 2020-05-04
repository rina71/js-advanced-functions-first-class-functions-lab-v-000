function returnFirstTwoDrivers(drivers){
  const myFunc = function() {
      return [drivers[0], drivers[1]];
  };
return myFunc();
}

function returnLastTwoDrivers(drivers){
  const myFunc = function() {
      return drivers.slice(-2);
  };
return myFunc();
}

function selectingDrivers(){
  const array = [returnFirstTwoDrivers(),returnLastTwoDrivers() ]
  }
  return array;
}
