import { body, check, oneOf, validationResult } from "express-validator";
import { Constants } from "../constants";

export const putTodoValidationRules = () => {
    return [
        body('status').exists().isString(),
    ]
}

export const postTodoValidationRules = () => {
    return [
        body('description').exists().isString(),
    ];
}

export const handleInputErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(Constants.ERROR_CODES.BAD_REQUEST);
        res.json({ errors: errors.array() });

    } else {
        next();
    }
}