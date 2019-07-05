import { getUUID } from "./uuid";

export class Dataset {
  constructor(surveyID, UUID, answers, isFinished) {
    this.surveyID = surveyID;
    if (UUID) {
      this.UUID = UUID;
      this.answers = answers;
      this.finished = isFinished;
    } else {
      this.UUID = getUUID();
      this.answers = [];
      this.finished = false;
    }
  }
}
