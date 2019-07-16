class CarbonModel {
  constructor() {
    this.carbonvalues = carbonvalues();
    this.quantifier = "hours";
    this.alternatives = Object.entries(this.carbonvalues).map(
      a => a[1]["text"]
    );
  }
}

/*This is a static representation of carbon emission modes and their associated values*/
const carbonvalues = () => {
  return {
    ecar: { text: "Car - electric", co2: 1.5 },
    train: { text: "Train", co2: 3.1 },
    bus: { text: "Bus", co2: 3.9 },
    car: { text: "Car - other", co2: 5.6 },
    plane_long: { text: "Plane - med./long", co2: 110.5 },
    plane_short: { text: "Plane - short dist.", co2: 195.3 },
    boat: { text: "Express boat", co2: 32.1 }
  };
};

export default CarbonModel;
