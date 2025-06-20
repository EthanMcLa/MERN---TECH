import ratelimit from "../Config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-limit-key");
        
        if(!success) {
            return res.status(429).json({error: "Too many requests"});

        }
        next();
    } catch(err){ 
        console.log("Rate Limit Error");
        next(err);
    }

}


export default rateLimiter;