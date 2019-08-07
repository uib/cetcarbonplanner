import CarbonModel from "./carbonmodel";

class SurveyData {
  constructor() {
    this.model = new CarbonModel();
    this.id = "travelcarbon";
    this.questions = this.buildQuestions(this.model);
  }

  questionConfig(type) {}

  buildQuestions(model) {
    const list = [];
    list.push(nameQuestion("Enter name of trip"));
    list.push(
      selectorQuestion("Type of meeting", [
        "Field work / Data collection",
        "Project meeting",
        "Meeting with funders",
        "Conference/meeting/course - presenting",
        "Conference/meeting/course - not presenting",
        "Other"
      ])
    );
    list.push(selectorQuestion("Multipurpose trip?"));
    list.push(inputQuestion("Duration of meeting", "Hours"));
    list.push(
      selectorQuestion("Importance", [
        "Essential",
        "Very important",
        "Somewhat important",
        "Less important"
      ])
    );
    list.push(
      selectorQuestion(
        "Please enter type and duration of each part of the trip.",
        model.alternatives,
        model.quantifier
      )
    );
    return list;
  }
}

function nameQuestion(questionText) {
  return { input: true, name: true, text: questionText };
}

function inputQuestion(questionText, isNameQuestion, quantifier) {
  /**Generates a question meant for the user to type input. If quantifier is not present, a freetext input is assumed. */
  return {
    input: true,
    text: questionText,
    quantifier: quantifier ? quantifier : false
  };
}

function selectorQuestion(questionText, alternatives, quantifier) {
  /*
  Question Text: A string with the question asked by the survey.
  Alternatives: If null, "yes/no" will be generated. Otherwise, contains the list of alternatives
                used in the radio select menu by both types of questions.
  Quantifier: If null, the question is not a list-type data entry. If not null, it is. 
              A string with the type of quantity used by list questions, such as kilometers or hours. 
  */
  const obj = { input: false };
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
