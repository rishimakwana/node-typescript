import { body } from 'express-validator';
import MESSAGE from '../helper/message';

export const hotelValidationRules = () => [
    body('name')
        .notEmpty().withMessage(MESSAGE.HOTEL_NAME_REQUIRED),
    body('location')
        .notEmpty().withMessage(MESSAGE.LOCATION_REQUIRED),
    body('rating')
        .notEmpty().withMessage(MESSAGE.RATING_REQUIRED)
        .isFloat({ min: 0, max: 5 }).withMessage(MESSAGE.INVALID_RATING),
    body('description')
        .notEmpty().withMessage(MESSAGE.DESCRIPTION_REQUIRED),
    body('amenities')
        .isArray({ min: 1 }).withMessage(MESSAGE.AMENITIES_REQUIRED),
    body('imageURL')
        .optional({ nullable: true })
        .isURL().withMessage(MESSAGE.INVALID_IMAGE_URL)
];
