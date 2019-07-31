import { getUUID } from "./uuid";

export class Dataset {
  constructor(surveyID, UUID, name, answers) {
    this.surveyID = surveyID;
    /*
      If the UUID is provided, it is assumed that answers are provided as well.
      The new object then represents an updated version of the old. 
      If it is not provided, a fresh dataset with no answers is returned.
    */
    if (UUID) {
      this.UUID = UUID;
      this.name = name;
      this.answers = answers;
    } else {
      this.UUID = getUUID();
      this.name = name ? name : "";
      this.answers = [];
    }
  }
}