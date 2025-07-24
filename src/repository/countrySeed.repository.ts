import { country } from "../models/country";
import { countries } from "../utils/countryData";

export class CountryRepository{
async seedCountry(){
     const post = new country({ countries: countries });
     return await post.save();
}

}