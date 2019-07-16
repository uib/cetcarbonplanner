import CarbonModel from "./carbonmodel";

class SurveyData {
  constructor() {
    this.model = new CarbonModel();
    this.questions = this.buildQuestions(this.model);
  }
  buildQuestions(model) {
    const list = [];
    list.push(surveyQuestion("Was it important?"));
    list.push(surveyQuestion("Was there a video alternative?"));
    list.push(
      surveyQuestion("What color was the sky?", ["Blue", "Green", "Pink"])
    );
    list.push(
      surveyQuestion(
        "Please enter type and duration of each trip.",
        model.alternatives,
        model.quantifier
      )
    );
    return list;
  }
}

function surveyQuestion(questionText, alternatives, quantifier) {
  /*
  Question Text: A string with the question asked by the survey.
  Alternatives: If null, "yes/no" will be generated. Otherwise, contains the list of alternatives
                used in the radio select menu by both types of questions.
  Quantifier: If null, the question is not a list-type data entry. If not null, it is. 
              The type of quantity used by list questions, such as kilometers or hours. An array of one or two strings,
              where index 0 is the singular form and 1 is the plural. Example: ["hour","hours"]. This simplifies multi-language
              support down the line.
  */
  const obj = {};
  obj.text = questionText;
  obj.alternatives = alternatives ? alternatives : ["Yes", "No"];
  if (quantifier) {
    obj.quantifier = quantifier;
    obj.list = true;
  } else {
    obj.list = false;
  }
  return obj;
}

const nothing = function() {
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
export default SurveyData;
