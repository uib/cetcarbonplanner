const getSurveyData = function() {
  const alternative1 = { key: "plane", value: "Airplane" };
  const alternative2 = { key: "train", value: "Train" };
  const alternative3 = { key: "car", value: "Car" };
  const alternative4 = { key: "ecar", value: "Electric Car" };
  const alternatives = [alternative1, alternative2, alternative3, alternative4];
  const question = {
    title: "Which mode of travel?",
    hours: true,
    alternatives: alternatives
  };

  return [question];
};

export default getSurveyData;
