import { StateRepository } from "../repository/stateData.repository";



export class StateService{
private stateRepo=new StateRepository();

async statedataService(){
try{
   const result=await this.stateRepo.seedData();
   return {data:result};
}
catch(err){
    console.log("error");
}
}


}