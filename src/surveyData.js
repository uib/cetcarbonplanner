const getSurveyData = function() {
  const alternative1 = { key: "plane", value: "Airplane" };
  const alternative2 = { key: "train", value: "Train" };
  const alternative3 = { key: "car", value: "Car" };
  const alternative4 = { key: "ecar", value: "Electric Car" };
  const alternatives = [alternative1, alternative2, alternative3, alternative4];
  const question1 = {
    title: "Which mode of travel?",
    list: true,
    alternatives: alternatives
  };
  const alt1 = { key: "yes", value: "Yes" };
  const alt2 = { key: "no", value: "No" };
  const question2 = {
    title: "What is your answer?",
    list: false,
    alternatives: [alt1, alt2]
  };
  const question3 = {
    title: "Which color?",
    list: false,
    alternatives: [
      { key: "red", value: "Red" },
      { key: "blue", value: "Blue" },
      { key: "green", value: "Green" }
    ]
  };
  return [
    {
      ID: "trip",
      title: "Register trip",
      questions: [question1, question2, question3]
    },
    { ID: "empty", title: "Empty survey", questions: [] }
  ];
};
//TODO error on matching IDs
export default getSurveyData;
