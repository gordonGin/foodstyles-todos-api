import { validationResult } from "express-validator";
import { Constants } from "../constants";

export const handleInputErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(Constants.ERROR_CODES.BAD_REQUEST);
        res.json({ errors: errors.array() });

    } else {
        next();
    }
}