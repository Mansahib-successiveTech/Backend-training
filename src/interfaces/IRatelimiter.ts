export interface IrateLimiter{
    rateLimiter(requestsLimit:number,timeLimit:number):void
}