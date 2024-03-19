import rateLimit from "express-rate-limit";
import MESSAGE from "../helper/message";

export const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 requests per windowMs
  message: { error: MESSAGE.RATE_LIMIT_EXCEEDED },
});
