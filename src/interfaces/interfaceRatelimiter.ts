export interface rateLimiter{
    rateLimiter(requestsLimit:number,timeLimit:number):void
}