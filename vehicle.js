let Vehicle = function(e,f,gt,aMPG,mD){
  let engine = e;
  let fuel = f;
  let gastank = gt;
  let averageMPG = aMPG;
  let milesDriven = mD;

  function totalMiles();{
    return milesDriven;
  }
  function fuelLeft();{
    return fuel;
  }
  function fill();{
    fuel = percent;

  }
  function drive();{
    milesDriven += (hours*averageMPG);
    fuel -= (milesDriven*hours);
    if fuel (f == 0){
      console.log("No More Gas!")
      return f == 0;
    }
  }
  function engineEfficiency();{
    if (e == 4){
      return 1;
    }
    else if(e == 6){
      return 1.20;
    }
    else if(e == 8){
      return 1.36;
    }
  }
  return totalMiles, fuelLeft, fill, drive;
}
