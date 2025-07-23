import express from "express"
import { countrySeed } from "../services/countrySeed";

const countryRoute=express.Router();


countryRoute.get('/seed-countries',countrySeed)

export {countryRoute};