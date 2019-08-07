import CarbonModel from "./carbonmodel";

class SurveyData {
  constructor() {
    this.model = new CarbonModel();
    this.id = "travelcarbon";
    this.questions = this.buildQuestions(this.model);
  }

  buildQuestions(model) {
    const list = [];
    list.push(nameQuestion("Enter name of trip"));
    list.push(
      selectQuestion("Type of meeting", [
        "Field work / Data collection",
        "Project meeting",
        "Meeting with funders",
        "Conference/meeting/course - presenting",
        "Conference/meeting/course - not presenting",
        "Other"
      ])
    );
    list.push(selectQuestion("Multipurpose trip?"));
    list.push(quantityQuestion("Duration of meeting", "Hours"));
    list.push(
      selectQuestion("Importance", [
        "Essential",
        "Very important",
        "Somewhat important",
        "Less important"
      ])
    );
    list.push(
      quantitySelectQuestion(
        "Please enter type and duration of each part of the trip.",
        model.alternatives,
        model.quantifier
      )
    );
    return list;
  }
}

function questionObject(type, text, alternatives, quantifier) {
  const obj = { type: type, text: text };
  if (alternatives) {
    obj.alternatives = alternatives;
  }
  if (quantifier) {
    obj.quantifier = quantifier;
  }
  return obj;
}

function nameQuestion(questionText) {
  return questionObject("name", questionText, false, false);
}

function quantitySelectQuestion(questionText, alternatives, quantifier) {
  return questionObject(
    "quantityselect",
    questionText,
    alternatives,
    quantifier
  );
}

function quantityQuestion(questionText, quantifier) {
  return questionObject("quantity", questionText, false, quantifier);
}

function selectQuestion(questionText, alternatives) {
  return questionObject("select", questionText, alternatives, false);
}

export default SurveyData;
