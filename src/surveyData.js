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
    list.push(
      nameQuestion(
        "Name of meeting",
        "Please register meetings that you organize that involves participants travelling by plane"
      )
    );
    list.push(
      selectQuestion("Type of meeting", "", [
        "Project meeting / workshop",
        "Conference / symposium (national)",
        "Conference / symposium (international)",
        "Other"
      ])
    );
    list.push(
      quantityQuestion(
        "Number of participants",
        "Please enter total number of participants at the meeting, i.e. not only those travelling by plane",
        "Participants"
      )
    );
    list.push(
      quantityQuestion(
        "Duration of meeting",
        "Please enter the duration of the meeting (hours)",
        "Hours"
      )
    );
    list.push(
      selectQuestion(
        "Is streaming or video attendance offered?",
        "Video attendance / streaming should be offered when possible"
      )
    );
    list.push(
      selectQuestion(
        "Importance",
        "Please give your own assessment of the importance of organizing a physical meeting involving air travels",
        ["Essential", "Very important", "Somewhat important", "Less important"]
      )
    );
    list.push(
      quantitySelectQuestion(
        "Flying participants.",
        "Please enter number of participants travelling by plane for each category below. (In the calculations, these are assumed to be roundtrip travels)",
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
    const questionlist = [];
    questionlist.push(nameQuestion("Enter name of trip", ""));
    questionlist.push(
      quantitySelectQuestion(
        "Purpose(s) of trip",
        "Please select the purpose(s) and duration (in hrs) of the activities covered by the trip.  One trip may include several activities.",
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
    questionlist.push(
      selectQuestion(
        "Is streaming or video attendance offered?",
        "Video attendance / streaming should be requested when possible"
      )
    );
    questionlist.push(
      selectQuestion(
        "Importance",
        "Please give your own assessment of the importance of travelling to this/these activity/activities",
        ["Essential", "Very important", "Somewhat important", "Less important"]
      )
    );
    questionlist.push(
      quantitySelectQuestion(
        "Mode(s) of transport",
        "Please enter overall duration for each mode of transport used during the trip",
        model.alternatives,
        model.quantifier
      )
    );
    return questionlist;
  }
}

function questionObject(type, heading, text, alternatives, quantifier) {
  const obj = { type: type, heading: heading, text: text };
  if (alternatives) {
    obj.alternatives = alternatives;
  }
  if (quantifier) {
    obj.quantifier = quantifier;
  }
  return obj;
}

function nameQuestion(questionHeading, infoText) {
  return questionObject("name", questionHeading, infoText, false, false);
}

function quantitySelectQuestion(
  questionHeading,
  infoText,
  alternatives,
  quantifier
) {
  return questionObject(
    "quantityselect",
    questionHeading,
    infoText,
    alternatives,
    quantifier
  );
}

function quantityQuestion(questionHeading, infoText, quantifier) {
  return questionObject(
    "quantity",
    questionHeading,
    infoText,
    false,
    quantifier
  );
}

function selectQuestion(
  questionHeading,
  infoText,
  alternatives = ["Yes", "No"]
) {
  return questionObject(
    "select",
    questionHeading,
    infoText,
    alternatives,
    false
  );
}

export default SurveyData;
