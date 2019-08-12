export default {
  keys: [
    "EV",
    "Train",
    "Bus",
    "Car",
    "Plane, regional",
    "Plane",
    "Express boat"
  ],
  margin: {
    top: 50,
    right: 130,
    bottom: 50,
    left: 60
  },
  defs: [
    {
      id: "dots",
      type: "patternDots",
      background: "inherit",
      color: "#38bcb2",
      size: 4,
      padding: 1,
      stagger: true
    },
    {
      id: "lines",
      type: "patternLines",
      background: "inherit",
      color: "#eed312",
      rotation: -45,
      lineWidth: 6,
      spacing: 10
    }
  ],
  fill: [
    {
      match: {
        id: "fries"
      },
      id: "dots"
    },
    {
      match: {
        id: "sandwich"
      },
      id: "lines"
    }
  ],
  axisBottom: {
    tickSize: 2,
    tickPadding: 2,
    tickRotation: 0,
    legend: "Transport mode",
    legendPosition: "middle",
    legendOffset: 32
  },
  axisLeft: {
    tickSize: 2,
    tickPadding: 2,
    tickRotation: 0,
    legend: "CO2 emissions",
    legendPosition: "middle",
    legendOffset: -20
  },
  legends: [
    {
      dataFrom: "keys",
      anchor: "bottom-right",
      direction: "column",
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 10,
      itemHeight: 20,
      itemDirection: "left-to-right",
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [
        {
          on: "hover",
          style: {
            itemOpacity: 1
          }
        }
      ]
    }
  ]
};
