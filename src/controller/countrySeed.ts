// services/countrySeed.ts

import { Request, Response } from "express";
import { country } from "../models/country";
import { countries } from "../utils/countryData";
import { CountryService } from "../services/countrySeed.service";

export class CountrySeed{ 
private countryService=new CountryService();
countrySeed = async (req: Request, res: Response) => {
  try {
    // Insert new seed data
    // const post = new country({ countries: countries });
    // await post.save();
    await this.countryService.countrySeedService();
    console.log(" Countries seeded successfully");
    res.status(201).json({
      message: "Countries seeded successfully"
    });
  } catch (err:any) {
    console.error(" Error seeding countries:", err.message);
    res
      .status(500)
      .json({ error: "Failed to seed countries", details: err.message });
  }
};

}
