export interface IRateLimiter{
    rateLimiter(requestsLimit:number,timeLimit:number):void
}