// validators/flightValidator.js
import { body } from 'express-validator';
import FLIGHT_MESSAGES from '../helper/flightMessages';

export const flightValidationRules = () => [
    body('airline')
        .notEmpty().withMessage(FLIGHT_MESSAGES.AIRLINE_REQUIRED),
    body('flightNumber')
        .notEmpty().withMessage(FLIGHT_MESSAGES.FLIGHT_NUMBER_REQUIRED),
    body('departureAirport')
        .notEmpty().withMessage(FLIGHT_MESSAGES.DEPARTURE_AIRPORT_REQUIRED),
    body('arrivalAirport')
        .notEmpty().withMessage(FLIGHT_MESSAGES.ARRIVAL_AIRPORT_REQUIRED),
    body('departureTime')
        .notEmpty().withMessage(FLIGHT_MESSAGES.DEPARTURE_TIME_REQUIRED)
        .isISO8601().toDate().withMessage(FLIGHT_MESSAGES.INVALID_DEPARTURE_TIME),
    body('arrivalTime')
        .notEmpty().withMessage(FLIGHT_MESSAGES.ARRIVAL_TIME_REQUIRED)
        .isISO8601().toDate().withMessage(FLIGHT_MESSAGES.INVALID_ARRIVAL_TIME),
    body('price')
        .notEmpty().withMessage(FLIGHT_MESSAGES.PRICE_REQUIRED)
        .isNumeric().withMessage(FLIGHT_MESSAGES.INVALID_PRICE)
];
