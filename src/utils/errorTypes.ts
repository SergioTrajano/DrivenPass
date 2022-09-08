function unathorizedError() {
    throw { code:401, message: "invalid credentials" };
}

function forbiddenError() {
    throw { code: 403, message: "You can not see other users infos" };
}

function notFountError(entity: string) {
    throw { code: 404, message: `${entity} does not exist` };
}

function conflictError(entity: String) {
    throw { code: 409, message: `${entity} already in use` };
}

function unprocessableEntityError(error: {details: {message: String}[]}) {
    throw { code: 422, message: error.details.map(detail => detail.message) };
}

export const error = {
    unathorizedError,
    forbiddenError,
    notFountError,
    conflictError,
    unprocessableEntityError,
}