import { getUUID } from "./uuid";

export class Dataset {
  constructor(surveyID, UUID, answers, isFinished, progress) {
    this.surveyID = surveyID;
    /*
      If the UUID is provided, it is assumed that all other parameters are provided as well.
      The new object then represents an updated version of the old. 
      If it is not provided, a fresh dataset with default settings is returned.
    */
    if (UUID) {
      this.UUID = UUID;
      this.answers = answers;
      this.finished = isFinished;
      this.progress = progress;
    } else {
      this.UUID = getUUID();
      this.answers = [];
      this.finished = false;
      this.progress = 0;
    }
  }
}
