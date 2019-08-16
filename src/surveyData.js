import CarbonModel from "./carbonmodel";

class SurveyData {
  /** This class is how the survey, i.e. the list of questions, is passed around the app. The functions within the class are
   *  the static text used to query the user, and the type of question so the interface knows which elements to draw. The
   * functions outside it are more generic definitions that take certain parameters and build coherent question objects.
   * The reason I split these was that I was considering some different way of storing the questions, so you can export the
   * functions outside the class and use them to generate survey data in other classes.
   *
   * There are four question types:
   *
   * "name" - This asks the user for the name of the trip. There is logic in the App which handles this question in
   * particular ways, for instance by letting it remain empty and filling in a default name.
   *
   * "select" - A list of alternatives, from which the user selects one.
   *
   * "quantity" - Asks the user to enter some number. The quantifier is what
   * amount the number pertains to, for instance "hours" of travel time.
   *
   * "quantityselect" - This combines the two above, so the user can create a list of answers, where each answer is
   * a combination of a quantity of an item selected from a list. An example is the travel question, where the user can for instance
   * enter 4 hours of flying, 10 hours of driving and 2 hours of bus to one journey.
   */
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

/**
 *
 * @param {The type of question, see above for details} type
 * @param {The heading on the question page} heading
 * @param {Text which explains the question in some detail to the user} text
 * @param {The list of alternatives to choose from. If null, it becomes a Yes/No question} alternatives
 * @param {When asking about the quantity of something, the quantifer says what it is, for instance "hours"} quantifier
 */
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

/**
 *below are the various question types, called the questionObject constructor with various parameters.
 Note that the code in the App use the question type to build the page, so you will need to change 
 logic elsewhere as well if you add new question types.  */

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
  alternatives = ["Yes", "No"] //default alternatives. If called without alternatives, it is interpreted as a Yes/No question.
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
