const Vehicle = require('./Vehicle.js');

function main(){
    //make two vehicles and take them for a spin.
   let flemborgini = new Vehicle(8,1,1,30,300);
   console.log(flemborgini.fuelLeft());
   flemborgini.drive(2);
   console.log(flemborgini.fuelLeft());
   console.log(flemborgini.totalMiles());
   flemborgini.fill(0.5);
   console.log(flemborgini.fill());

   let flemrrai= new Vehicle(8,1,1,25,250);
   console.log(flemrrai.fuelLeft());
   flemrrai.drive(3);
   console.log(flemrrai.fuelLeft());
   console.log(flemrrai.totalMiles());
   flemborgini.fill(2);
   console.log(flemrrai.fill());
}
//run the main method
main();
