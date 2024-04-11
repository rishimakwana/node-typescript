import { body } from 'express-validator';
import MESSAGE from '../helper/message';

export const policyValidationRules = [
    body('policyName')
        .notEmpty().withMessage(MESSAGE.POLICY_NAME_REQR),
    body('description')
        .notEmpty().withMessage(MESSAGE.DESCRIPTION_REQR),
    body('coverage')
        .isArray({ min: 1 }).withMessage(MESSAGE.COVERAGE_REQR),
    body('premium')
        .notEmpty().withMessage(MESSAGE.PREMIUM_REQR)
        .isNumeric().withMessage(MESSAGE.INVALID_PREMIUM),
    body('tripCancellationCoverage')
        .isBoolean().withMessage(MESSAGE.INVALID_TRIP_CANCELLATION_COVERAGE),
    body('emergencyMedicalCoverage')
        .isBoolean().withMessage(MESSAGE.INVALID_EMERGENCY_MEDICAL_COVERAGE),
    body('baggageCoverage')
        .isBoolean().withMessage(MESSAGE.INVALID_BAGGAGE_COVERAGE),
    body('tripStartDate')
        .notEmpty().withMessage(MESSAGE.TRIP_START_DATE_REQR)
        .isISO8601().toDate().withMessage(MESSAGE.INVALID_TRIP_START_DATE),
    body('tripEndDate')
        .notEmpty().withMessage(MESSAGE.TRIP_END_DATE_REQR)
        .isISO8601().toDate().withMessage(MESSAGE.INVALID_TRIP_END_DATE)
];
