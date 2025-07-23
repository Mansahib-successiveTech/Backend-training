import express from "express"
import { States } from "../services/stateData";
import { CountrySeed } from "../services/countrySeed";

const countryRoute=express.Router();
const state=new States();
const countrySeed=new CountrySeed();
countryRoute.post("/state",state.stateData)
countryRoute.post('/seed-countries',countrySeed.countrySeed)

export {countryRoute};