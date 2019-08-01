import CarbonModel from "./carbonmodel";

class SurveyData {
  constructor() {
    this.model = new CarbonModel();
    this.id = "travelcarbon";
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
              A string with the type of quantity used by list questions, such as kilometers or hours. 
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

//TODO error on matching IDs
export default SurveyData;
