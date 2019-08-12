import CarbonModel from "./carbonmodel";

class SurveyData {
  constructor(parameter) {
    this.model = new CarbonModel();
    this.id = parameter;
    this.questions =
      parameter === "trip"
        ? this.buildTripQuestions(this.model)
        : this.buildMeetingQuestions(this.model);
  }

  buildMeetingQuestions(model) {
    const list = [];
    list.push(nameQuestion("Name of meeting"));
    list.push(
      selectQuestion("Type of meeting", [
        "Project meeting / workshop",
        "Conference / symposium (national)",
        "Conference / symposium (international)",
        "Other"
      ])
    );
    list.push(quantityQuestion("Number of participants", "Participants"));
    list.push(quantityQuestion("Duration of meeting", "Hours"));
    list.push(selectQuestion("Is streaming or video attendance offered?"));
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
        "Please enter number and travel distance for flying participants.",
        [
          "Short distance <45 min",
          "Scandinavia 45 min - 2 hrs",
          "Europe 2-4 hrs",
          "Rest of world 4-12 hrs"
        ],
        "Participants"
      )
    );
    return list;
  }

  buildTripQuestions(model) {
    const list = [];
    list.push(nameQuestion("Enter name of trip"));
    /*list.push(
      selectQuestion("Purpose of trip", [
        "Field work / Data collection",
        "Project meeting",
        "Meeting with funders",
        "Conference/meeting/course - presenting",
        "Conference/meeting/course - not presenting",
        "Other"
      ])
    );*/
    list.push(
      quantitySelectQuestion(
        "Purpose(s) of trip",
        [
          "Field work",
          "Project meeting",
          "Meeting with funders",
          "Conference, presenting",
          "Conference, not presenting",
          "Other"
        ],
        "Duration of activity (hours)"
      )
    );
    list.push(selectQuestion("Is streaming or video attendance offered?"));
    /*list.push(quantityQuestion("Duration of meeting", "Hours"));*/
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

function entryQuestion(questionText) {
  return questionObject("input", questionText, false, false);
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

function selectQuestion(questionText, alternatives = ["Yes", "No"]) {
  return questionObject("select", questionText, alternatives, false);
}

export default SurveyData;
