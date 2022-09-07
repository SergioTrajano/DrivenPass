export function unathorizedError() {
    throw { code:401, message: "invalid credentials" };
}

export function forbiddenError() {
    throw { code: 403, message: "You can not see other users infos" };
}

export function notFountError() {
    throw { code: 404, message: "User does not exist" };
}

export function conflictError(entity: String) {
    throw { code: 409, message: `${entity} already in use` };
}

export function unprocessableEntityError(error: {details: {message: String}[]}) {
    throw { code: 422, message: error.details.map(detail => detail.message) };
}