import  MESSAGE  from "../helper/message";
export const errorHandler = (err: any, req: any, res: any, next: any) => {
  if (err.name === 'ValidationError') {
    res.status(400).json({ error: MESSAGE.VALIDATION_ERROR });
  } else {
    res.status(500).json({ error: MESSAGE.INTERNAL_SERVER_ERROR });
  }
};
