import { NextFunction, Request, Response } from "express";
import helmet from "helmet";

export class HeaderSecurity {
  public static HelmetSecurity = (req: Request, res: Response, next: NextFunction) => {
    const middlewareHelment= helmet({
      // xssFilter is deprecated and no longer used in helmet v5+
      noSniff: true, // Prevent MIME-sniffing

      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"], 
        },
      },

      referrerPolicy: {
        policy: "no-referrer",
      },

      frameguard: {
        action: "deny",
      },

      crossOriginResourcePolicy: {
        policy: "same-origin",
      },

      hsts: {
        maxAge: 15552000, // 180 days 
        includeSubDomains: true,
      },
      hidePoweredBy:true,
    })

    return middlewareHelment(req,res,next);
  };



}
