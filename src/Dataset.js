import { getUUID } from "./uuid";

export class Dataset {
  constructor(survey) {
    this.id = getUUID();
    this.finished = false;
    this.surveyID = survey.ID;
    this.answers = [];
  }
}

//things it should do:
//initialize a finished set from JSON string, i.e. some stored data
//initialize an empty set from a question list
