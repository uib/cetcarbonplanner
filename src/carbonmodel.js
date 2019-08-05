class CarbonModel {
  constructor() {
    this.model = carbonvalues();
    this.quantifier = "hours";
    //TODO: create single-source-of-truth for key/value naming in data objects.
    this.alternatives = Object.keys(this.model);
  }

  //Array.isArray if/else-overloading til en funksjon som mapper et array til model
  sumPerMode(obj) {
    const returnObj = {};
    const dataList = Array.isArray(obj) ? obj : [obj];
    for (const datapoint of dataList) {
      if (returnObj.hasOwnProperty(datapoint.mode)) {
        returnObj[datapoint.mode] +=
          datapoint.amount * this.model[datapoint.mode];
      } else {
        returnObj[datapoint.mode] =
          datapoint.amount * this.model[datapoint.mode];
      }
    }
    return returnObj;
  }
}

/*This is a static representation of carbon emission modes and their associated values in grams per passenger-hour of travel*/
const carbonvalues = () => {
  return {
    "Car - electric": 1.5,
    Train: 3.1,
    Bus: 3.9,
    "Car - other": 5.6,
    "Plane - med./long": 110.5,
    "Plane - short dist.": 195.3,
    "Express boat": 32.1
  };
};

export default CarbonModel;
/*Alternatives:
return {
    ecar: { text: "Car - electric", co2: 1.5 },
    train: { text: "Train", co2: 3.1 },
    bus: { text: "Bus", co2: 3.9 },
    car: { text: "Car - other", co2: 5.6 },
    plane_long: { text: "Plane - med./long", co2: 110.5 },
    plane_short: { text: "Plane - short dist.", co2: 195.3 },
    boat: { text: "Express boat", co2: 32.1 }
  };
return [
    { text: "Car - electric", co2: 1.5 },
    { text: "Train", co2: 3.1 },
    { text: "Bus", co2: 3.9 },
    { text: "Car - other", co2: 5.6 },
    { text: "Plane - med./long", co2: 110.5 },
    { text: "Plane - short dist.", co2: 195.3 },
    { text: "Express boat", co2: 32.1 }
  ];
  
  */
