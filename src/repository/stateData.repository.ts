import { states } from "../models/state";

export class StateRepository {
  async seedData() {
    return await states.insertMany([
      { state: "delhi" },
      { state: "ghaziabad" },
      { state: "up" },
      { state: "bihar" },
    ]);
  }
}
