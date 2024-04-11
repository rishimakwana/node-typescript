import MESSAGE from "../helper/message";
import { Request, Response, NextFunction } from "express";

type MiddlewareFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export const validateEmail: MiddlewareFunction = (req, res, next) => {
  const { email } = req.body;

  try {
    if (!email) {
      throw new Error(MESSAGE.EMAIL_REQR);
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
    if (!emailRegex.test(email)) {
      throw new Error(MESSAGE.EMAIL_NOT_EXISTS);
    }

    next();
  } catch (error: any) {
    handleError(error, res, MESSAGE.INVALID_EMAIL);
  }
};

export const validatePassword: MiddlewareFunction = (req, res, next) => {
  const { password } = req.body;

  try {
    if (!password) {
      throw new Error(MESSAGE.PASSWORD);
    }

    if (password.length < 6) {
      throw new Error(MESSAGE.INVALID_PASS_LENGTH);
    }

    next();
  } catch (error: any) {
    handleError(error, res, MESSAGE.INVALID_PASS);
  }
};

export const validateEmailAndPassword: MiddlewareFunction = (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Error(MESSAGE.CHECK_EMAIL_PASS);
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
    if (!emailRegex.test(email)) {
      throw new Error(MESSAGE.EMAIL_NOT_EXISTS);
    }

    if (password.length < 6) {
      throw new Error(MESSAGE.INVALID_PASS_LENGTH);
    }

    next();
  } catch (error: any) {
    handleError(error, res, MESSAGE.INVALID_EMAIL_PWD);
  }
};

function handleError(
  error: Error,
  res: any,
  defaultMessage: string
): void {
  const errorMessage = error.message || defaultMessage;
  res.status(400).json({ error: errorMessage });
}
