import { CountryRepository } from "../repository/countrySeed.repository";

export class CountryService{
 private countryRepo=new CountryRepository();
    async countrySeedService(){
       return await this.countryRepo.seedCountry(); 
   }
}