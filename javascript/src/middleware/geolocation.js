import axios from "axios";

export const geoLoc = async (req, res, next) => {
  try {
    const ip =
      req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.ip;

    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const country = response.data?.country;

    console.log(`User IP: ${ip}, Country: ${country}`);

   if(ip==="::1"){
    return next();
   }
    if (country !== "IN" ) {
      return res.status(403).json({
        success: false,
        message: "Access denied: not allowed from your region",
      });
    }

    next(); // Allowed country
  } catch (error) {
    console.error("Geo location error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to determine location",
    });
  }
};
