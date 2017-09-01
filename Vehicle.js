let Vehicle = function(e,f,gt,aMPG,mD){
  let engine = e;
  let fuel = f;
  let gastank = gt;
  let averageMPG = aMPG;
  let milesDriven = mD;

  function totalMiles(){
    return milesDriven;
  }
  function fuelLeft(){
    return fuel;
  }
  function fill(){
    let gastank = 0;
    fuel += p;

    if(f => 1){
      fuel = 1;
    }
    }
  }
  function drive(){
    let fuelburned = (engineEfficiency()*hours)
    if(fuelburned <= fuel){
      milesDriven += (hours*aMPG);
      fuel -= (engineEfficiency()*hours);
    }
    else{
      milesDriven = fuel*aMPG;
      fuel = 0;
    }


  }
  function engineEfficiency(){
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

module.exports = Vehicle;
