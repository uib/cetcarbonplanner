const getSurveyData = function() {
  const alternative1 = { key: "plane", value: "Airplane" };
  const alternative2 = { key: "train", value: "Train" };
  const alternative3 = { key: "car", value: "Car" };
  const alternative4 = { key: "ecar", value: "Electric Car" };
  const alternatives = [alternative1, alternative2, alternative3, alternative4];
  const question1 = {
    title: "Which mode of travel?",
    hours: true,
    alternatives: alternatives
  };
  const alt1 = { key: "yes", value: "Yes" };
  const alt2 = { key: "no", value: "No" };
  const question2 = {
    title: "What is your answer?",
    hours: false,
    alternatives: [alt1, alt2]
  };

  return [
    { title: "Register trip", questions: [question1, question2] },
    { title: "Empty survey", questions: [] }
  ];
};

export default getSurveyData;
