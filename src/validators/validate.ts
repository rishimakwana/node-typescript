import { NextFunction } from 'express';
import { validationResult } from 'express-validator';

const validate = (req: any, res: any, next: NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);
        res.status(400).json({ errors: errorMessages });
    } else {
        next();
    }
};

export default validate;
