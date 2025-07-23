// services/countrySeed.ts

import { Request, Response } from "express";
import { country } from "../models/country";
import { countries } from "../utils/countryData";

const countrySeed = async (req: Request, res: Response) => {
  try {
    // Insert new seed data
    const post = new country({ countries: countries });
    await post.save();
    console.log(" Countries seeded successfully");
    res.status(201).json({
      message: "Countries seeded successfully",
      countries: post.countries,
    });
  } catch (err: any) {
    console.error(" Error seeding countries:", err.message);
    res
      .status(500)
      .json({ error: "Failed to seed countries", details: err.message });
  }
};

export { countrySeed };
