class CarbonModel {
  constructor() {
    this.model = carbonvalues();
    this.quantifier = "Hours";
    this.alternatives = Object.keys(this.model);
  }
}

/*This is a static representation of carbon emission modes and their associated values in grams per passenger-hour of travel*/
const carbonvalues = () => {
  return {
    "Electric car": 1.5,
    Train: 3.1,
    Bus: 3.9,
    Car: 5.6,
    "Plane, regional": 110.5,
    "Plane, international": 195.3,
    "Express boat": 32.1
  };
};

export default CarbonModel;
