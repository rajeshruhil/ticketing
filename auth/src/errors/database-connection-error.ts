import { CustomError } from './custom-error';
export class DatabaseConnctionError extends CustomError {
    statusCode = 500;
    reason = "Error connecting to database";

    constructor() {
        super('Error connecting to db');

        Object.setPrototypeOf(this, DatabaseConnctionError.prototype);
    }

    serializeError() {
        return [
            {
                message: this.reason
            }
        ];
    }
}